// PersonalWebSite\Portfolio-frontend\src\components\Blog\Pages\BlogPage.jsx

import { Outlet } from 'react-router-dom';
import './BlogPage.scss';

const BlogPage = () => {
  return (
    <section className='blogPage'>
      <Outlet /> {/* This renders the contents of the nested routes */}
    </section>
  );
};

export default BlogPage;
