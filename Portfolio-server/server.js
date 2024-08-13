// Import necessary modules
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

// Import schemas
import User from './Schema/User.js';
import Blog from './Schema/Blog.js';

// Configure dotenv
dotenv.config();

// Initialize Express application
const server = express();

// Use the PORT value from the environment variable, if available
const PORT = process.env.PORT || 3000;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// Regular expressions for email and password validation
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex for email
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // Regex for password

// Middleware
server.use(express.json()); // Parses incoming JSON requests
server.use(cors()); // Enables CORS for all routes

// Connect to MongoDB
mongoose
  .connect(process.env.DB_LOCATION, {
    autoIndex: true, // Enable automatic index creation
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Configure AWS S3
const s3 = new aws.S3({
  region: 'eu-central-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Function to generate a signed URL for S3 upload
const generateUploadURL = async () => {
  const date = new Date();
  const imageName = `${nanoid()}-${date.getTime()}.jpeg`;

  return await s3.getSignedUrlPromise('putObject', {
    Bucket: 'personal-portfolio-website-blog',
    Key: imageName,
    Expires: 1000, // Expiration time in seconds
    ContentType: 'image/jpeg',
  });
};

// Route to get upload URL
server.get('/get-upload-url', (req, res) => {
  generateUploadURL()
    .then(url => res.status(200).json({ uploadURL: url }))
    .catch(err => {
      console.error('Error generating upload URL:', err);
      return res.status(500).json({ error: 'Error generating upload URL.' });
    });
});

// Middleware to verify JWT
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

// Function to format user data for sending
const formatDataToSend = user => {
  const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY);

  return {
    accessToken,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    fullname: user.personal_info.fullname,
  };
};

// Function to generate a unique username
const generateUsername = async email => {
  let username = email.split('@')[0];

  // Check if the username already exists
  let existingUser = await User.exists({ 'personal_info.username': username });

  if (existingUser) {
    username += nanoid().substring(0, 5); // Append a unique suffix
  }

  return username;
};

// Route to handle user signup
server.post('/signup', async (req, res) => {
  let { fullname, email, password } = req.body;

  // Validate input data
  if (fullname.length < 3) {
    return res.status(403).json({ error: 'Fullname must be at least 3 characters long.' });
  }

  if (!email.length) {
    return res.status(403).json({ error: 'Email cannot be empty.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(403).json({ error: 'Invalid email format.' });
  }

  if (!passwordRegex.test(password)) {
    return res.status(403).json({
      error:
        'Password must be between 6 and 20 characters long and contain at least one uppercase letter, one lowercase letter, and one number.',
    });
  }

  try {
    // Hash the password
    const hashed_password = await bcrypt.hash(password, 10);

    // Generate a unique username
    let username = await generateUsername(email);

    // Create a new user
    let user = new User({
      personal_info: { fullname, email, password: hashed_password, username },
    });

    // Save the user and send the response
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

// Route to handle user signin
server.post('/signin', (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  User.findOne({ 'personal_info.email': email })
    .then(user => {
      if (!user) {
        return res.status(403).json({ error: 'Email not found' });
      }

      if (!user.google_auth) {
        bcrypt.compare(password, user.personal_info.password, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Server error' });
          }

          if (result) {
            return res.status(200).json(formatDataToSend(user));
          }

          return res.status(403).json({ error: 'Incorrect password' });
        });
      } else {
        return res.status(403).json({
          error: 'Account was created using Google. Try logging in with Google.',
        });
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.message });
    });
});

// Route to handle Google authentication
server.post('/google-auth', async (req, res) => {
  let { access_Token } = req.body;

  getAuth()
    .verifyIdToken(access_Token)
    .then(async decodeUser => {
      let { email, name, picture } = decodeUser;

      // Adjust image resolution
      picture = picture.replace('s96-c', 's384-c');

      // Find or create a user
      let user = await User.findOne({ 'personal_info.email': email })
        .select(
          'personal_info.fullname personal_info.username personal_info.profile_img google_auth'
        )
        .catch(err => {
          return res.status(500).json({ error: err.message });
        });

      if (user) {
        if (!user.google_auth) {
          return res.status(403).json({
            error:
              'This email was registered without Google. Please log in with a password to access the account.',
          });
        }
        // Return user data if found
        return res.status(200).json(formatDataToSend(user));
      } else {
        let username = await generateUsername(email);

        user = new User({
          personal_info: {
            fullname: name,
            email,
            username,
            profile_img: picture,
          },
          google_auth: true, // Indicates Google authentication
        });

        await user
          .save()
          .then(u => {
            return res.status(200).json(formatDataToSend(u));
          })
          .catch(error => {
            return res.status(500).json({ error: error.message });
          });
      }
    })
    .catch(err => {
      return res.status(500).json({ error: 'Invalid Google token' });
    });
});

// Route to create a blog post
server.post('/create-blog-post', verifyJWT, async (req, res) => {
  let authorId = req.user;
  let { title, banner, content, tags, description, draft } = req.body;

  // Validate input data
  if (
    !title.length ||
    !banner.length ||
    !content.blocks.length ||
    !tags.length ||
    !description.length
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Convert tags to lowercase
  tags = tags.map(tag => tag.toLowerCase());

  try {
    // Create a new blog post
    let blog = new Blog({
      title,
      description,
      banner,
      content,
      tags,
      author: authorId,
      draft: Boolean(draft),
    });

    // Save the blog and update user
    let savedBlog = await blog.save();
    let incrementValue = draft ? 0 : 1;

    // Update the user with the new blog reference
    await User.findByIdAndUpdate(authorId, {
      $inc: { 'account_info.total_posts': incrementValue },
      $push: { blogs: savedBlog._id },
    });

    return res.status(200).json({ id: savedBlog._id });
  } catch (err) {
    console.error('Error in create-blog-post:', err);
    return res.status(500).json({ error: 'An error occurred while creating the blog post' });
  }
});

// Start the server
server.listen(PORT, () => {
  console.log('Listening on port -> ' + PORT);
});
