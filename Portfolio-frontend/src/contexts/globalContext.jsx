// src/contexts/globalContext.jsx

'use client';
{
  /* The "use client" Execution Guarantees that any code that depends 
  on the client environment (such as React hooks) is executed correctly */
}

import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from './context';
import { lookInSession } from '../common/session';

function Container({ children }) {
  const navigate = useNavigate();

  // Variable refers to the icon with the symbol 'D'
  const onDeoIconGold1Click = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // State for authentication status
  const [status, setStatus] = useState('notAuthenticated');

  // Create a user auth State with accessToken and profile_img
  const [userAuth, setUserAuth] = useState({
    accessToken: null,
    profile_img: null,
    username: null,
  });

  // useEffect should be called once
  useEffect(() => {
    const userInSession = lookInSession('user');

    // Check if the user is already logged in, and if so, retrieve their data from the session storage.
    if (userInSession) {
      try {
        const user = JSON.parse(userInSession);
        setUserAuth({
          accessToken: user.accessToken,
          profile_img: user.profile_img, // Add profile_img from session data
        });
        setStatus(user.accessToken ? 'authenticated' : 'notAuthenticated');
      } catch (error) {
        console.error('Failed to parse user from session:', error);
        setUserAuth({ accessToken: null, profile_img: null });
        setStatus('notAuthenticated');
      }
    } else {
      setUserAuth({ accessToken: null, profile_img: null });
      setStatus('notAuthenticated');
    }
  }, []);

  // Function to handle sign out
  const onSignOutClick = useCallback(() => {
    setUserAuth({ accessToken: null, profile_img: null });
    setStatus('notAuthenticated');
    // Clear user data from session storage
    sessionStorage.removeItem('user');
    // Redirects to blog page after logout
    navigate('/blog');
  }, [navigate]);

  return (
    <userContext.Provider
      value={{
        onDeoIconGold1Click,
        status,
        setStatus,
        userAuth,
        setUserAuth,
        onSignOutClick,
      }}>
      {children}
    </userContext.Provider>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
