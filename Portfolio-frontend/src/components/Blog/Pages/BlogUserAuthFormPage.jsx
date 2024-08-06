// PersonalWebSite\Portfolio-frontend\src\components\Blog\Pages\BlogUserAuthFormPage.page.jsx

import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { FaRegUser, FaAt } from 'react-icons/fa';
import { PiPasswordBold } from 'react-icons/pi';
import images from '../../../assets/imageIndex';
import AnimationWrapper from '../../../common/page-animation';
import BlogInput from '../blogApp/BlogInput';
import './BlogUserAuthFormPage.scss';
import { storeInSession } from '../../../common/session';
import { userContext } from '../../../contexts/context';

const BlogUserAuthFormPage = ({ type }) => {
  const { userAuth, setUserAuth } = useContext(userContext);

  // Check if `userAuth` is set
  const accessToken = userAuth?.accessToken;

  console.log(accessToken);

  const userAuthThroughServer = (serverRoute, formData) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({ data }) => {
        storeInSession('user', JSON.stringify(data));
        setUserAuth(data);
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    // prevent form from submitting
    e.preventDefault();

    let serverRoute = type === 'sign-in' ? '/signin' : '/signup';

    // email and password authentication configuration settings
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

    // Get form data
    const form = new FormData(formRef.current);
    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    // Extract values from formData
    const { fullname = '', email = '', password = '' } = formData;

    // form validation
    if (fullname) {
      if (fullname.length < 3) {
        // the fullname needs to be at least 3 characters.
        return toast.error('Fullname must be at least 3 characters long.');
      }
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
      return toast.error('Email cannot be empty.');
    }

    if (!emailRegex.test(email)) {
      return toast.error('Invalid email format.');
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        'Password must be between 6 and 20 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
      );
    }

    // to send data to the server
    userAuthThroughServer(serverRoute, formData);

    // here you should send the data to the server using your preferred method
    // e.g., fetch API, axios, or a library like axios
    // if data is sent successfully, show a success message using toast.success()
    // if data is not sent successfully, show an error message using toast.error()

    toast.success('Form submitted successfully!');
  };

  return (
    <>
      {/*
    I  wrapping my whole form section inside the animation wrapper 
    and  will just create a div around this section and it will render 
    it so whatever animation Properties or animation a library we will use 
    we will do all that stuff inside this animation wrapper  to make 
    the animation consistent in all the pages wherever we want animation 
    we will trap those components with this animation wrapper and it will 
    create that animation so that just we have to just change the animation 
    in this animation wrapper and it will change the whole website Pages animation.
    */}

      <AnimationWrapper keyValue={type}>
        <section className='blogUserAuthFormPageMain'>
          <Toaster />
          <form ref={formRef} className='blogUserAuthFormPageForm' action=' '>
            <h1 className='blogUserAuthFormPageTitle'>
              {type == 'sign-in' ? 'Welcome Back' : 'Join us today'}
            </h1>

            {type !== 'sign-in' ? (
              <BlogInput
                name='fullname'
                type='text'
                placeholder='Full Name'
                icon={FaRegUser}
              />
            ) : (
              ''
            )}

            <BlogInput
              name='email'
              type='email'
              placeholder='Email Address'
              icon={FaAt}
            />

            <BlogInput
              name='password'
              type='password'
              placeholder='Password'
              icon={PiPasswordBold}
            />

            <button
              className='blogUserAuthFormPageSubmit'
              type='submit'
              onClick={handleSubmit}>
              {type.replace('-', ' ')}
            </button>

            <div className='blogUserAuthFormPageFormSeparator'>
              <hr className='blogUserAuthFormPageFormSeparatorLine' />
              <p>or</p>
              <hr className='blogUserAuthFormPageFormSeparatorLine' />
            </div>

            <button
              type='submit'
              className='blogUserAuthFormPageSubmit blogUserAuthFormPageSubmitGoogle'>
              <img
                className='blogUserAuthFormPageSubmit-icon'
                alt='Google icon'
                src={images.google}
              />
              Continue with Google
            </button>

            {type == 'sign-in' ? (
              <p className='blogUserAuthFormPageSubmit-Question'>
                Don`t have an account?
                <Link
                  className='blogUserAuthFormPageSubmit-QuestionLink'
                  to='/blog/signUp'>
                  Join Me
                </Link>
              </p>
            ) : (
              <p className='blogUserAuthFormPageSubmit-Question'>
                already a member?
                <Link
                  className='blogUserAuthFormPageSubmit-QuestionLink'
                  to='/blog/signIn'>
                  Sign in here
                </Link>
              </p>
            )}
          </form>
        </section>
      </AnimationWrapper>
    </>
  );
};

BlogUserAuthFormPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BlogUserAuthFormPage;
