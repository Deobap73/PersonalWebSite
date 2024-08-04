// PersonalWebSite\Portfolio-frontend\src\components\Blog\Pages\BlogUserAuthFormPage.page.jsx

import { FaRegUser, FaAt } from 'react-icons/fa';
import { PiPasswordBold } from 'react-icons/pi';
import images from '../../../assets/imageIndex';
import { Link } from 'react-router-dom';
import AnimationWrapper from '../../../common/page-animation';
import BlogInput from '../blogApp/BlogInput';
import './BlogUserAuthFormPage.scss';

const BlogUserAuthFormPage = ({ type }) => {
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
      </AnimationWrapper>
    </>
  );
};

export default BlogUserAuthFormPage;
