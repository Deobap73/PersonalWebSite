// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import React, { useContext, useEffect, useRef, useState } from 'react';
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

  // Local state for title
  const [localTitle, setLocalTitle] = useState('');

  // Context for blog data and editor state
  const { blog, setBlog, textEditor, setTextEditor, setEditorState } = useContext(userContext);
  const { banner, content } = blog[0];

  // Initialize the EditorJS instance
  useEffect(() => {
    if (!editorInstanceRef.current) {
      const editor = new EditorJS({
        holder: editorRef.current,
        data: content || {},
        tools: tools,
        placeholder: "Let's write an awesome story",
        onChange: async () => {
          try {
            const content = await editorInstanceRef.current.save();
            console.log('Editor content onChange:', content);
            setBlog([{ ...blog[0], content }]);
          } catch (error) {
            console.error('Failed to save EditorJS content:', error);
          }
        },
      });

      // Set the textEditor state when EditorJS is ready
      editor.isReady
        .then(() => {
          setTextEditor({ isReady: true, editor });
          editorInstanceRef.current = editor;
        })
        .catch(error => {
          console.error('EditorJS initialization failed', error);
          setTextEditor({ isReady: false });
        });
    }

    return () => {
      if (editorInstanceRef.current && typeof editorInstanceRef.current.destroy === 'function') {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, [content, setBlog, setTextEditor]);

  // Handle changes to the blog title
  const handleTitleChange = e => {
    const input = e.target.value;
    setLocalTitle(input); // Update local title state
    setBlog([{ ...blog[0], title: input }]);
  };

  // Handle title key down event
  const handleTitleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent line breaks or form submission
      if (editorRef.current) {
        editorRef.current.focus(); // Move focus to the editor
      }
    }
  };

  // Handle banner image upload
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

  // Handle publish event
  const handlePublishEvent = () => {
    console.log('Current Title in handlePublishEvent:', localTitle);
    console.log('Current Banner:', banner);
    console.log('Is Text Editor Ready?', textEditor.isReady);

    if (!banner.length) {
      return toast.error('Upload a blog Banner to publish it');
    }
    if (!localTitle.length) {
      return toast.error('Blog Title is required');
    }
    if (textEditor.isReady) {
      textEditor.editor
        .save()
        .then(data => {
          console.log('Editor Data on Publish:', data);

          // Check if data.blocks exists and is valid
          if (data && data.blocks && Array.isArray(data.blocks) && data.blocks.length) {
            setBlog([{ ...blog[0], content: data }]);
            setEditorState('published');
          } else {
            return toast.error('Write something in the editor...');
          }
        })
        .catch(error => {
          console.error('Failed to save content:', error);
          toast.error('Failed to save editor content.');
        });
    }
  };

  return (
    <>
      <nav className='blogEditorNavbar'>
        <Link to='/blog'>
          <img src={images.deoIconGold} alt='Circular logo with the letter D' />
        </Link>
        <p className='blogEditorTitle'> {localTitle.length ? localTitle : 'New Blog'}</p>
        <div className='blogEditorNavbarButtons'>
          <button className='blogEditorNavbarButton' onClick={handlePublishEvent}>
            Publish
          </button>
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
            value={localTitle}></textarea>
          <hr className='blogEditorBreak' />
          <div id='editorjs' ref={editorRef} className='blogEditorContent'></div>
        </div>
      </section>
    </>
  );
};
