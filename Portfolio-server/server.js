// PersonalWebSite\Portfolio-server\server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import serviceAccountKey from './personalwebsite-blog-37add-firebase-adminsdk-8vjsd-669cbae04c.json' assert { type: 'json' };
import { getAuth } from 'firebase-admin/auth';
import aws from 'aws-sdk';

// Importing the schemas from the Schema folder
import User from './Schema/User.js';
import Blog from './Schema/Blog.js';

// Configure dotenv
dotenv.config();

const server = express();

// Uses the PORT value from the environment variable, if available
const PORT = process.env.PORT || 3000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

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
    autoIndex: true, // This option is passed inside an object
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// settings up S3 bucket
const s3 = new aws.S3({
  region: 'eu-central-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

//create a function that we will generate upload code URL
const generateUploadURL = async () => {
  const date = new Date();
  const imageName = `${nanoid()}-${date.getTime()}.jpeg`;

  return await s3.getSignedUrlPromise('putObject', {
    Bucket: 'personal-portfolio-website-blog',
    Key: imageName,
    Expires: 1000,
    ContentType: 'image/jpeg',
  });
};

// create routes for upload URL Images
server.get('/get-upload-url', (req, res) => {
  generateUploadURL()
    .then(url => res.status(200).json({ uploadURL: url }))
    .catch(err => {
      console.error('Error generating upload code:', err);
      return res.status(500).json({ 'error': 'Error generating upload code.' });
    });
});

// create middleware verifyJWT
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(404).json({ error: 'No access token found' });
  }

  jwt.verify(token, process.env.SECRET_ACCESS_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Token is not valid' });
    }

    req.user = user.id;
    next();
  });
};

// what we want to send to the database
const formatDataToSend = user => {
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
const generateUsername = async email => {
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
    return res.status(403).json({ 'error': 'Fullname must be at least 3 characters long.' });
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
    .then(user => {
      if (!user) {
        // User not found, send an error response
        return res.status(403).json({ error: 'Email not found' });
      }

      if (!user.google_auth) {
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
      } else {
        return res.status(403).json({
          error: 'account was created using google. Try logging in with google',
        });
      }
    })
    .catch(err => {
      // Handle any errors that occur during a query
      console.error(err);
      return res.status(500).json({ error: err.message });
    });
});

// setup google auth

server.post('/google-auth', async (req, res) => {
  let { access_Token } = req.body;

  getAuth()
    .verifyIdToken(access_Token)
    .then(async decodeUser => {
      let { email, name, picture } = decodeUser;

      // to give a High resolution for the image of the Google user
      picture = picture.replace('s96-c', 's384-c');

      // create a user in database
      let user = await User.findOne({ 'personal_info.email': email })
        .select(
          'personal_info.fullname personal_info.username personal_info.profile_img google_auth'
        )
        .then(u => {
          return u || null;
        })
        .catch(err => {
          return res.status(500).json({ error: err.message });
        });

      if (user) {
        if (!user.google_auth) {
          return res.status(403).json({
            error:
              'This email was signed without Google. Please login with password to access the account.',
          });
        }
      } else {
        let username = await generateUsername(email);

        user = new User({
          personal_info: {
            fullname: name,
            email,
            username,
          },
          google_auth: true, // Indicates that the user has been authenticated by Google
        });

        await user
          .save()
          .then(u => {
            user = u;
            // Return user data as a response
            return res.status(200).json(user);
          })
          .catch(error => {
            return res.status(500).json({ error: error.message });
          });
      }
    });
});

// create a route to publish the blog post
server.post('/create-blog-post', verifyJWT, (req, res) => {
  let authorId = req.user;

  let { title, banner, content, tags, description, draft } = req.body;

  // validate inputs
  if (
    !title.length ||
    !banner.length ||
    !content.blocks.length ||
    !tags.length ||
    !description.length
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // reassigning the content of tags to uppercase, capitalize and lowercase be recognized as the same tag
  tags = tags.map(tag => tag.toLowerCase());

  // If we have any type of character in the title that does not belong to capital A to Z or capital A to Z or 0 to 9 then they will be replaced
  let blog_id =
    title
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .replace(/\s+/g, '-')
      .trim() + nanoid();

  let blog = new Blog({
    title,
    description,
    banner,
    content,
    tags,
    author: authorId,
    blog_id,
    draft: Boolean(draft),
  });

  // to save this blog data inside a database
  blog
    .save()
    .then(blog => {
      let incrementValue = draft ? 0 : 1;

      return User.findByIdAndUpdate(authorId, {
        $inc: { 'account_info.total_post': incrementValue },
        $push: { 'blogs': blog.blog_id },
      });
    })
    .then(() => {
      return res.status(200).json({ id: blog_id });
    })
    .catch(err => {
      console.error('Error in create-blog-post:', err);
      return res.status(500).json({ error: 'An error occurred while creating the blog post' });
    });
});

// start the server
server.listen(PORT, () => {
  console.log('Listening on port -> ' + PORT);
});
