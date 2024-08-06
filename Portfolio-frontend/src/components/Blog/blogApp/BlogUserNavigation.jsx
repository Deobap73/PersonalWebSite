// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogUserNavigation.jsx

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AnimationWrapper from '../../../common/page-animation';
import { userContext } from '../../../contexts/context';
import './BlogUserNavigation.scss';

const BlogUserNavigation = () => {
  const { username } = useContext(userContext);

  return (
    <AnimationWrapper transition={{ duration: 0.2 }}>
      <div className='BlogUserNavigationPanel'>
        <Link to={`/user/${username}`}>Profile</Link>
        <Link to='blog/dashboard/blogs'>Dashboard</Link>
        <Link to='blog/settings/edit-profile'>Settings</Link>
      </div>
    </AnimationWrapper>
  );
};

export default BlogUserNavigation;
