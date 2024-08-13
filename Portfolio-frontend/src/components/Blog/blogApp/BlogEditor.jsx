// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import EditorJS from '@editorjs/editorjs';
import { tools } from './BlogTools.jsx';
import { userContext } from '../../../contexts/context';
import images from '../../../assets/imageIndex.js';
import { awsUploadImage } from '../../../common/aws.jsx';
import './BlogEditor.scss';

export const BlogEditor = () => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);
  const isEditorInitialized = useRef(false);
  const { blog, setBlog, setTextEditor, setEditorState } = useContext(userContext);
  const [localTitle, setLocalTitle] = useState(blog[0]?.title || '');
  const { banner, content } = blog[0];

  useEffect(() => {
    setLocalTitle(blog[0]?.title || '');
  }, [blog]);

  useEffect(() => {
    if (!isEditorInitialized.current && editorRef.current) {
      const editor = new EditorJS({
        holder: editorRef.current,
        data: content || {},
        tools: tools,
        placeholder: "Let's write an awesome story",
        onChange: debounce(async () => {
          try {
            const content = await editor.save();
            console.log('Editor content onChange:', content);
            setBlog(prevBlog => [{ ...prevBlog[0], content }]);
          } catch (error) {
            console.error('Failed to save EditorJS content:', error);
          }
        }, 300),
        onReady: () => {
          console.log('Editor.js is ready to work!');
          isEditorInitialized.current = true;
        },
        autofocus: true,
      });

      editor.isReady
        .then(() => {
          console.log('Editor is ready');
          setTextEditor({ isReady: true, editor });
          editorInstanceRef.current = editor;
        })
        .catch(error => {
          console.error('EditorJS initialization failed', error);
          setTextEditor({ isReady: false });
        });
    }

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
        isEditorInitialized.current = false;
      }
    };
  }, [content, tools, setBlog]);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleTitleChange = e => {
    const input = e.target.value;
    setLocalTitle(input);
    setBlog([{ ...blog[0], title: input }]);
  };

  const handleTitleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editorRef.current?.focus();
    }
  };

  const handleBannerUpload = async e => {
    const img = e.target.files[0];
    if (img) {
      const loadingToast = toast.loading('Uploading...');
      try {
        const url = await awsUploadImage(img);
        toast.dismiss(loadingToast);
        toast.success('Image uploaded successfully');
        setBlog([{ ...blog[0], banner: url }]);
      } catch (err) {
        toast.dismiss(loadingToast);
        toast.error('Image upload failed');
        console.error(err);
      }
    }
  };

  const handlePublishEvent = async () => {
    if (!banner.length) {
      return toast.error('Upload a blog Banner to publish it');
    }
    if (!localTitle.length) {
      return toast.error('Blog Title is required');
    }

    try {
      const editor = editorInstanceRef.current; // Correct access to editor instance
      if (!editor) {
        console.error('Editor instance not found');
        return toast.error('Editor not initialized properly');
      }

      const data = await editor.save();
      console.log('Editor save data:', data);

      if (data && data.blocks && Array.isArray(data.blocks)) {
        const hasContent = data.blocks.some(
          block =>
            block.data &&
            Object.values(block.data).some(value => value && value.trim && value.trim().length > 0)
        );

        if (hasContent) {
          console.log('Valid content found, publishing...');
          setBlog([{ ...blog[0], content: data }]);
          setEditorState('published');
          toast.success('Blog published successfully!');
        } else {
          console.log('No valid content found');
          toast.error('Write something in the editor...');
        }
      } else {
        console.error('Invalid editor data structure:', data);
        toast.error('Error: Invalid editor data');
      }
    } catch (error) {
      console.error('Failed to save content:', error);
      toast.error('Failed to save editor content.');
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
            value={localTitle}
          />
          <hr className='blogEditorBreak' />
          <div id='editorjs' ref={editorRef} className='blogEditorContent'></div>
        </div>
      </section>
    </>
  );
};
