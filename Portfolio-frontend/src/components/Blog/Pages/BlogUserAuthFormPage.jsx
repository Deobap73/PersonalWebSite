// PersonalWebSite\Portfolio-frontend\src\components\Blog\Pages\BlogUserAuthFormPage.page.jsx

import { FaRegUser, FaAt } from 'react-icons/fa';
import { PiPasswordBold } from 'react-icons/pi';
import images from '../../../assets/imageIndex';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BlogUserAuthFormPage.scss';
import BlogInput from '../blogApp/BlogInput';

const BlogUserAuthFormPage = ({ type }) => {
  return (
    <>
      <section className='blogUserAuthFormPageMain'>
        <form className='blogUserAuthFormPageForm' action=' '>
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

          <button type='submit' className='blogUserAuthFormPageSubmit'>
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
    </>
  );
};

BlogUserAuthFormPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BlogUserAuthFormPage;
