// src/pages/Blog.jsx

import { Helmet } from 'react-helmet';
import BlogPage from '../components/Blog/BlogPage';
import BlogMain from '../components/Blog/presentation/BlogMain';
import Footer from '../components/Footer/Footer';
import './Blog.scss';

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
      <section className='blogPresentationName'>
        <h1 className='my-blog'>My Blog</h1>
      </section>
      <BlogMain />
      {/* <BlogPage /> */}
      <Footer />
    </div>
  );
};

export default Blog;
