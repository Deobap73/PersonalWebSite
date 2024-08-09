// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import images from '../../../assets/imageIndex.js';
import { awsUploadImage } from '../../../common/aws.jsx';
import './BlogEditor.scss';
import { userContext } from '../../../contexts/context';

export const BlogEditor = () => {
  const nextInputRef = useRef(); // Reference to next input block/field

  // Context access and destructuring
  const { blog, setBlog } = useContext(userContext);
  const { title, banner, content, tags, author } = blog[0]; // Accessing the first element of the array

  const handleTitleKeyDown = e => {
    if (e.key === 'Enter') {
      // If the "Enter" key is pressed
      e.preventDefault(); // Prevents line breaks or submission
      if (nextInputRef.current) {
        nextInputRef.current.focus(); //Moves focus to the next field
      }
    }
  };

  const handleTitleChange = e => {
    const input = e.target.value;
    // Updating blog status
    setBlog([{ ...blog[0], title: input }]);
  };

  const handleBannerUpload = e => {
    const img = e.target.files[0];

    if (img) {
      const loadingToast = toast.loading('Uploading...');

      awsUploadImage(img)
        .then(url => {
          console.log('Uploaded image URL:', url);
          if (url) {
            toast.dismiss(loadingToast);
            toast.success('Image uploaded successfully');

            // Updating the blog status banner
            setBlog([{ ...blog[0], banner: url }]);
          }
        })
        .catch(err => {
          toast.dismiss(loadingToast);
          toast.error('Image upload failed');
          console.error(err);
        });
    }
  };

  return (
    <>
      <nav className='blogEditorNavbar'>
        <Link to='/blog'>
          <img src={images.deoIconGold} alt='Circular logo with the letter D' />
        </Link>

        <p className='blogEditorTitle'> {title.length ? title : 'New Blog'}</p>

        <div className='blogEditorNavbarButtons'>
          <button className='blogEditorNavbarButton'>Publish</button>
          <button className='blogEditorNavbarButton blogEditorNavbarButtonDraft'>Save draft</button>
        </div>
      </nav>
      <Toaster />
      <section className='blogEditor'>
        <div className='blogEditorSub'>
          <div className='blogEditorBanner'>
            <label htmlFor='uploadBanner'>
              <img
                src={banner || images.blogBanner} // Use the global state banner
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
          <textarea
            placeholder='Blog Title'
            className='blogEditorTitle'
            onKeyDown={handleTitleKeyDown}
            onChange={handleTitleChange}
            value={title} // Synchronizing title value with global state
          ></textarea>

          <hr className='blogEditorBreak' />

          <textarea
            ref={nextInputRef} // Reference to the next field
            placeholder='Next Block'
            className='blogEditorContent'></textarea>
        </div>
      </section>
    </>
  );
};
