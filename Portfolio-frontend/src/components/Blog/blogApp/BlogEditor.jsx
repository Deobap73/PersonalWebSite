// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogEditor.jsx

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import EditorJS from '@editorjs/editorjs';
import axios from 'axios'; // Import axios for HTTP requests
import { tools } from './BlogTools.jsx';
import { userContext } from '../../../contexts/context';
import images from '../../../assets/imageIndex.js';
import { awsUploadImage } from '../../../common/aws.jsx';
import './BlogEditor.scss';

export const BlogEditor = () => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);
  const isEditorInitialized = useRef(false);
  const {
    blog,
    setBlog,
    textEditor,
    setTextEditor,
    setEditorState,
    userAuth: { accessToken },
  } = useContext(userContext);
  const [localTitle, setLocalTitle] = useState(blog[0]?.title || '');
  const { banner, content } = blog[0];

  let navigate = useNavigate();

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

  // Create the handleSaveDraft function to save the draft
  const handleSaveDraft = async e => {
    // Check if the button is disabled
    if (e.target.className.includes('disabled')) {
      return; // Return if the button is disabled
    }

    // Validate the title before saving as a draft
    if (!localTitle.length) {
      return toast.error('Write blog title before saving it as a draft'); // Show error if title is missing
    }

    // Show loading toast
    const loadingToast = toast.loading('Saving Draft...');

    // Disable the draft button
    e.target.classList.add('disabled');

    try {
      // Check if the editor is ready
      if (textEditor.isReady) {
        // Get the content from the editor
        const content = await textEditor.editor.save();

        // Create the blog draft object to send to the server
        const blogObject = {
          title: localTitle,
          banner,
          content,
          draft: true, // Indicate that this is a draft
        };

        // Send POST request to create a new draft blog post
        await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/create-blog-post`, blogObject, {
          headers: {
            'Authorization': `Bearer ${accessToken}`, // Include authentication token
          },
        });

        // On successful response
        e.target.classList.remove('disabled'); // Re-enable the button
        toast.dismiss(loadingToast); // Dismiss the loading toast
        toast.success('Save 👌'); // Show success toast

        // Redirect to the blog page after a short delay
        setTimeout(() => {
          navigate('/blog');
        }, 500);
      }
    } catch (error) {
      // On error response
      e.target.classList.remove('disabled'); // Re-enable the button
      toast.dismiss(loadingToast); // Dismiss the loading toast
      toast.error(error.response?.data?.error || 'An error occurred'); // Show error toast
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
          <button
            className='blogEditorNavbarButton blogEditorNavbarButtonDraft'
            onClick={handleSaveDraft}>
            Save draft
          </button>
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
