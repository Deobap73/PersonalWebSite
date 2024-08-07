// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import { Link } from 'react-router-dom';
import images from '../../../assets/imageIndex.js';
import './BlogEditor.scss';

export const BlogEditor = () => {
  return (
    <>
      <nav className='blogEditorNavbar'>
        {/* Link to the blog homepage */}
        <Link to='/blog'>
          <img src={images.deoIconGold} alt='Circular logo with the letter D' />
        </Link>
        <p className='blogEditorTitle'>New blog</p>
        <div className='blogEditorNavbarButtons'>
          <button className='blogEditorNavbarButton'>Publish</button>
          <button className='blogEditorNavbarButton blogEditorNavbarButtonDraft'>
            save draft
          </button>
        </div>
      </nav>

      <div className='blogEditor'></div>
    </>
  );
};
