// PersonalWebSite\Portfolio-frontend\src\common\firebase.jsx

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhCXVKpfqpP0MKM_RvCQEdhR14euGHkj0',
  authDomain: 'personalwebsite-blog-37add.firebaseapp.com',
  projectId: 'personalwebsite-blog-37add',
  storageBucket: 'personalwebsite-blog-37add.appspot.com',
  messagingSenderId: '681186140545',
  appId: '1:681186140545:web:628cf274b2001124048880',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// add a google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });

  return user;
};
