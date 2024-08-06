// PersonalWebSite\Portfolio-server\server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt, { hash } from 'bcrypt';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';

// Importing the schemas from the Schema folder
import User from './Schema/User.js';

// Configure dotenv
dotenv.config();

const server = express();

// Uses the PORT value from the environment variable, if available
const PORT = process.env.PORT || 3000;

// email and password authentication configuration settings
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

// Middleware
server.use(express.json());
// enable our server to accept the data from FrontEnd
server.use(cors());

// Connecting to MongoDB
mongoose
  .connect(process.env.DB_LOCATION, {
    autoIndex: true, // Esta opção é passada dentro de um objeto
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// what we want to send to the database
const formatDataToSend = (user) => {
  //create an access token
  const accessToken = jwt.sign(
    { id: user._id },
    process.env.SECRET_ACCESS_KEY
    /* { expiresIn: '15m' } */
  );

  return {
    accessToken,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    fullname: user.personal_info.fullname,
  };
};

// Create username dynamically
const generateUsername = async (email) => {
  let username = email.split('@')[0];

  // Check if username already exists in the database
  let existingUser = await User.exists({ 'personal_info.username': username });

  existingUser ? (username += nanoid().substring(0, 5)) : '';

  return username;
};

// setup sign-up root for the form validation
server.post('/signup', async (req, res) => {
  let { fullname, email, password } = req.body;

  // validating the data from frontend
  if (fullname.length < 3) {
    // the fullname needs to be at least 3 characters.
    return res
      .status(403)
      .json({ 'error': 'Fullname must be at least 3 characters long.' });
  }

  if (!email.length) {
    /* email dot length will give me the length of it, so if it is 0,
     it is equal to false, which means this will not be executed,
     but since we have to execute it when it is zero, in this case,
     to convert the false to true, we can add an exclamation mark in front of email,
     this will indicate that the point length of the email
     will give us 0 and it means false and since we have an exclamation mark
     in the beginning of false, it will convert that false into True basically,
     which means that This condition will be true
    */
    return res.status(403).json({ 'error': 'Email cannot be empty.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(403).json({ 'error': 'Invalid email format.' });
  }

  if (!passwordRegex.test(password)) {
    return res.status(403).json({
      'error':
        'Password must be between 6 and 20 characters long and contain at least one uppercase letter, one lowercase letter, and one number.',
    });
  }

  try {
    // Convert password to a hash
    const hashed_password = await bcrypt.hash(password, 10);

    // Storing user data in the database
    let username = await generateUsername(email);

    let user = new User({
      personal_info: { fullname, email, password: hashed_password, username },
    });

    // Saving the user and sending the response
    let savedUser = await user.save();
    return res.status(200).json(formatDataToSend(savedUser));
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already exists.' });
    } else {
      return res.status(500).json({ error: err.message });
    }
  }
});

// setup sign-in root for the form validation

server.post('/signin', (req, res) => {
  let { email, password } = req.body;

  // Check that email and password have been provided
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  User.findOne({ 'personal_info.email': email })
    .then((user) => {
      if (!user) {
        // User not found, send an error response
        return res.status(403).json({ error: 'Email not found' });
      }

      // Check if the password is correct
      bcrypt.compare(password, user.personal_info.password, (err, result) => {
        if (err) {
          // Handling bcrypt errors
          console.error(err);
          return res.status(500).json({ error: 'Server error' });
        }

        if (result) {
          // Passwords match, send success response
          return res.status(200).json(formatDataToSend(user));
        }

        // Passwords do not match, send an error response
        return res.status(403).json({ error: 'Incorrect password' });
      });
    })
    .catch((err) => {
      // Handle any errors that occur during a query
      console.error(err);
      return res.status(500).json({ error: err.message });
    });
});

server.listen(PORT, () => {
  console.log('Listening on port -> ' + PORT);
});
