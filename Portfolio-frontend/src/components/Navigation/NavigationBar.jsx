// src/components/NavigationBar.jsx

import PropTypes from 'prop-types';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.scss';
import { userContext } from '../../contexts/context';

const NavigationBar = ({ context }) => {
  const navigate = useNavigate();
  const { status, setStatus } = useContext(userContext);

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
              <a href='/blog/writePage'>Write</a>
              <b className='b'>|</b>
              <span
                className='about'
                onClick={() => setStatus('notAuthenticated')}>
                Sign Out
              </span>
            </>
          )}
        </>
      )}
    </nav>
  );
};

NavigationBar.propTypes = {
  context: PropTypes.node.isRequired,
};

export default NavigationBar;
