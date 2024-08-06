// src/pages/Blog.jsx

import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogMain from '../components/Blog/Pages/BlogMain';
import BlogPage from '../components/Blog/Pages/BlogPage';
import BlogUserAuthFormPage from '../components/Blog/Pages/BlogUserAuthFormPage';
import Footer from '../components/Footer/Footer';
import './Blog.scss';
import { BlogNavbar } from '../components/Blog/blogApp/BlogNavbar';

const Blog = () => {
  return (
    <div className='blog'>
      <Helmet>
        <title>Blog - Deolindo Baptista</title>
        <meta
          name='description'
          content='Read the latest articles on web development by Deolindo Baptista. Stay updated with the newest trends, tips, and tutorials in coding and programming.'
        />
        <meta
          name='keywords'
          content='Deolindo Baptista, portfolio, web development, junior web developer, web developer portfolio, web development projects, web development skills, blog, web development blog, html, css, scss, JavaScript, nodejs, figma, photoshop, git, github, mern, react, mongodb, coding, programming'
        />
        <meta property='og:title' content='Blog - Deolindo Baptista' />
        <meta
          property='og:description'
          content='Read the latest articles on web development by Deolindo Baptista. Stay updated with the newest trends, tips, and tutorials in coding and programming.'
        />
        <meta property='og:url' content='https://deolindobaptista.com/blog' />
        <meta property='og:type' content='website' />
      </Helmet>
      <BlogNavbar />
      <section className='blogPresentationName'>
        <h1 className='my-blog'>My Blog</h1>
      </section>

      {/* Render BlogMain only in the main blog route */}
      {location.pathname === '/blog' && <BlogMain />}

      <Routes>
        <Route path='/' element={<BlogPage />}>
          <Route
            path='signIn'
            element={<BlogUserAuthFormPage type='sign-in' />}
          />
          <Route
            path='signUp'
            element={<BlogUserAuthFormPage type='sign-up' />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Blog;
