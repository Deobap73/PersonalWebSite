// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import EditorJS from '@editorjs/editorjs';
import { userContext } from '../../../contexts/context';
import images from '../../../assets/imageIndex.js';
import { awsUploadImage } from '../../../common/aws.jsx';
import { tools } from './BlogTools.jsx';
import './BlogEditor.scss';

export const BlogEditor = () => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  const { blog, setBlog } = useContext(userContext);
  const { title, banner, content, tags, author } = blog[0];

  useEffect(() => {
    if (!editorInstanceRef.current) {
      editorInstanceRef.current = new EditorJS({
        holder: editorRef.current,
        data: content || {},
        tools: tools,
        placeholder: "Let's write an awesome story",
        onChange: async () => {
          const content = await editorInstanceRef.current.save();
          setBlog([{ ...blog[0], content }]);
        },
      });
    }

    return () => {
      if (editorInstanceRef.current && typeof editorInstanceRef.current.destroy === 'function') {
        editorInstanceRef.current.destroy();
      }
    };
  }, []);

  const handleTitleChange = e => {
    const input = e.target.value;
    setBlog([{ ...blog[0], title: input }]);
  };

  // handle title change event for blog changes that are not allowed by default
  const handleTitleKeyDown = e => {
    if (e.key === 'Enter') {
      // If the "Enter" key is pressed
      e.preventDefault(); // Prevents line breaks or submission
      if (editorRef.current) {
        editorRef.current.focus(); // Moves focus to the next block, the text editor
      }
    }
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
                src={banner || images.blogBanner}
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
            onChange={handleTitleChange}
            onKeyDown={handleTitleKeyDown}
            value={title}></textarea>
          <hr className='blogEditorBreak' />
          <div id='editorjs' ref={editorRef} className='blogEditorContent'></div>
        </div>
      </section>
    </>
  );
};
