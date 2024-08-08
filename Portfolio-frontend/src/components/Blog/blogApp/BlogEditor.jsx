// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import images from '../../../assets/imageIndex.js';
import { awsUploadImage } from '../../../common/aws.jsx';
import './BlogEditor.scss';

export const BlogEditor = () => {
  let blogBannerRef = useRef();

  const handleBannerUpload = (e) => {
    let img = e.target.files[0];

    if (img) {
      let loadingToast = toast.loading('uploading...');

      awsUploadImage(img)
        .then((url) => {
          console.log('Uploaded image URL:', url);
          if (url) {
            toast.dismiss(loadingToast);
            toast.success('Image uploaded successfully');
            blogBannerRef.current.src = url;
          }
        })
        .catch((err) => {
          toast.dismiss(loadingToast);
          return toast.error(err);
        });
    }
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
      <Toaster />
      <section className='blogEditor'>
        <div className='blogEditorSub'>
          <div className='blogEditorBanner'>
            <label htmlFor='uploadBanner'>
              <img
                ref={blogBannerRef}
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
    </>
  );
};
