// src/contexts/globalContext.jsx

import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from './context';
import { lookInSession } from '../common/session';

function Container({ children }) {
  const navigate = useNavigate();

  const onDeoIconGold1Click = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [editorState, setEditorState] = useState('editor');
  const [status, setStatus] = useState('notAuthenticated');
  const [userAuth, setUserAuth] = useState({
    accessToken: null,
    profile_img: null,
    username: null,
  });

  const blogStructure = {
    title: '',
    banner: '',
    content: '',
    tags: '',
    auther: { personal_info: {} },
  };

  const [blog, setBlog] = useState([blogStructure]);

  useEffect(() => {
    const userInSession = lookInSession('user');
    if (userInSession) {
      try {
        const user = JSON.parse(userInSession);
        setUserAuth({
          accessToken: user.accessToken,
          profile_img: user.profile_img,
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

  const onSignOutClick = useCallback(() => {
    setUserAuth({ accessToken: null, profile_img: null });
    setStatus('notAuthenticated');
    sessionStorage.removeItem('user');
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
        editorState,
        setEditorState,
        blog,
        setBlog,
        blogStructure,
      }}>
      {children}
    </userContext.Provider>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
