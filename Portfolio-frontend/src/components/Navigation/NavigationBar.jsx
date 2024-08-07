// src/components/NavigationBar.jsx

import PropTypes from 'prop-types';
import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../contexts/context';
import BlogUserNavigation from '../Blog/blogApp/BlogUserNavigation';
import './NavigationBar.scss';

const NavigationBar = ({ context }) => {
  const navigate = useNavigate();

  const { userAuth } = useContext(userContext);

  const { status, onSignOutClick } = useContext(userContext);

  // Local state to control BlogUserNavigation visibility
  const [isUserNavVisible, setUserNavVisible] = useState(false);

  const onHomeClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate('/aboutMe');
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate('/blog/signIn');
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate('/blog/signUp');
  }, [navigate]);

  const onWriteClick = useCallback(() => {
    navigate('/editor');
  }, [navigate]);

  // Click handler to toggle BlogUserNavigation visibility
  const toggleUserNav = () => {
    setUserNavVisible((prevState) => !prevState);
  };

  return (
    <nav className='navigationBar'>
      {context === 'home' && (
        <>
          <span className='about' onClick={onAboutClick}>
            About
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onProjectsClick}>
            Projects
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onBlogClick}>
            Blog
          </span>
        </>
      )}
      {context === 'about' && (
        <>
          <span className='about' onClick={onHomeClick}>
            Home
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onProjectsClick}>
            Projects
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onBlogClick}>
            Blog
          </span>
        </>
      )}
      {context === 'projects' && (
        <>
          <span className='about' onClick={onHomeClick}>
            Home
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onAboutClick}>
            About
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onBlogClick}>
            Blog
          </span>
        </>
      )}
      {context === 'blog' && (
        <>
          <span className='about' onClick={onHomeClick}>
            Home
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onAboutClick}>
            About
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onProjectsClick}>
            Projects
          </span>
          <b className='b'>|</b>

          {status === 'notAuthenticated' ? (
            <>
              <span className='about' onClick={onSignInClick}>
                Sign In
              </span>
              <b className='b'>|</b>
              <span className='about' onClick={onSignUpClick}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              <span className='about' onClick={onWriteClick}>
                Write
              </span>
              <b className='b'>|</b>
              <span className='about' onClick={onSignOutClick}>
                Sign Out
              </span>
              <b className='b'>|</b>
              <div className='blogUserImage'>
                <button className='blogUserIcon' onClick={toggleUserNav}>
                  <img src={userAuth.profile_img} alt='User Profile' />
                </button>
                {/* Conditionally render BlogUserNavigation */}
                {isUserNavVisible && <BlogUserNavigation />}
              </div>
            </>
          )}
        </>
      )}
    </nav>
  );
};

NavigationBar.propTypes = {
  context: PropTypes.string.isRequired,
};

export default NavigationBar;
