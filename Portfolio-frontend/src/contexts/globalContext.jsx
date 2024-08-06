// src/contexts/globalContext.jsx

'use client';
{
  /* The "use client" Execution Guarantees that any code that depends 
  on the client environment (such as React hooks) is executed correctly */
}

import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { userContext } from './context';
import { lookInSession } from '../common/session';

function Container({ children }) {
  // Variable refers to the icon with the symbol 'D'
  const onDeoIconGold1Click = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // useEffect should be called once
  useEffect(() => {
    const userInSession = lookInSession('user');

    // Check if the user is already logged in, and if so, retrieve their data from the session storage.
    if (userInSession) {
      try {
        setUserAuth(JSON.parse(userInSession));
      } catch (error) {
        console.error('Failed to parse user from session:', error);
        setUserAuth({ accessToken: null });
      }
    } else {
      setUserAuth({ accessToken: null });
    }
  }, []);

  // State for authentication status
  const [status, setStatus] = useState('notAuthenticated');

  // create a user auth State
  const [userAuth, setUserAuth] = useState({ accessToken: null });

  return (
    <userContext.Provider
      value={{ onDeoIconGold1Click, status, setStatus, userAuth, setUserAuth }}>
      {children}
    </userContext.Provider>
  );
}

// Set validation for the children property
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
