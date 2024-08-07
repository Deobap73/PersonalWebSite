// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import { Link } from 'react-router-dom';
import images from '../../../assets/imageIndex.js';
import './BlogEditor.scss';
import AnimationWrapper from '../../../common/page-animation.jsx';

export const BlogEditor = () => {
  const handleBannerUpload = (e) => {
    let img = e.target.files[0];

    console.log(img);
  };

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

      <AnimationWrapper>
        <section className='blogEditor'>
          <div className='blogEditorSub'>
            <div className='blogEditorBanner'>
              <label htmlFor='uploadBanner'>
                <img
                  src={images.blogBanner}
                  alt='Placeholder image'
                  className='blogEditorBannerImage'
                />
                <input
                  id='uploadBanner'
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  hidden
                  onChange={handleBannerUpload}
                />
              </label>
            </div>
          </div>
        </section>
      </AnimationWrapper>
    </>
  );
};
