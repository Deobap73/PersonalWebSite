import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

let profile_imgs_name_list = [
  'Garfield',
  'Tinkerbell',
  'Annie',
  'Loki',
  'Cleo',
  'Angel',
  'Bob',
  'Mia',
  'Coco',
  'Gracie',
  'Bear',
  'Bella',
  'Abby',
  'Harley',
  'Cali',
  'Leo',
  'Luna',
  'Jack',
  'Felix',
  'Kiki',
];
let profile_imgs_collections_list = ['notionists-neutral', 'adventurer-neutral', 'fun-emoji'];

const userSchema = mongoose.Schema(
  {
    personal_info: {
      fullname: {
        type: String,
        lowercase: true,
        required: true,
        minlength: [3, 'fullname must be 3 letters long'],
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        minlength: [3, 'Username must be 3 letters long'],
        unique: true,
      },
      bio: {
        type: String,
        maxlength: [200, 'Bio should not be more than 200'],
        default: '',
      },
      profile_img: {
        type: String,
        default: () =>
          `https://api.dicebear.com/6.x/${
            profile_imgs_collections_list[
              Math.floor(Math.random() * profile_imgs_collections_list.length)
            ]
          }/svg?seed=${
            profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]
          }`,
      },
    },
    admin: {
      type: Boolean,
      default: false,
    },
    social_links: {
      youtube: {
        type: String,
        default: '',
      },
      instagram: {
        type: String,
        default: '',
      },
      facebook: {
        type: String,
        default: '',
      },
      twitter: {
        type: String,
        default: '',
      },
      github: {
        type: String,
        default: '',
      },
      website: {
        type: String,
        default: '',
      },
    },
    account_info: {
      total_posts: {
        type: Number,
        default: 0,
      },
      total_reads: {
        type: Number,
        default: 0,
      },
    },
    google_auth: {
      type: Boolean,
      default: false,
    },
    blogs: [{ type: Schema.Types.ObjectId, ref: 'blogs' }],
  },
  {
    timestamps: {
      createdAt: 'joinedAt',
    },
  }
);

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model('users', userSchema);
