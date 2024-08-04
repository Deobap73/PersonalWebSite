// PersonalWebSite\Portfolio-frontend\src\components\Blog\Pages\BlogPage.jsx

import { Outlet } from 'react-router-dom';
import './BlogPage.scss';

const BlogPage = () => {
  return (
    <section className='blogPage'>
      <Outlet /> {/* Isso renderiza o conteúdo das rotas aninhadas */}
    </section>
  );
};

export default BlogPage;
