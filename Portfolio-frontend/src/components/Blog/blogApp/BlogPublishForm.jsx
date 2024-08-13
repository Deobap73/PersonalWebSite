// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogPublishForm.jsx

import { userContext } from '../../../contexts/context';
import { useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { BlogTags } from './BlogTags';
import { IoMdClose } from 'react-icons/io';
import './BlogPublishForm.scss';

export const BlogPublishForm = () => {
  const characterLimited = 200;

  const { blog, setBlog, setEditorState } = useContext(userContext);

  // Check if blog data is available
  if (!blog || blog.length === 0) {
    return <p>No blog data available</p>;
  }

  // Destructure current blog data
  const [currentBlog] = blog;
  const { banner, title, description, tags } = currentBlog;

  const handleCloseEvent = () => {
    setEditorState('editor');
  };

  // Handle title change
  const handleBlogTitleChange = e => {
    const input = e.target.value;
    setBlog(prevBlog => [{ ...prevBlog[0], title: input }]);
  };

  // Handle description change
  const handleBlogDescriptionChange = e => {
    const input = e.target.value;
    setBlog(prevBlog => [{ ...prevBlog[0], description: input }]);
  };

  const handleTitleKeyDown = e => {
    if (e.key === 13) {
      e.preventDefault();
    }
  };

  // Add tag to blog
  const handleAddTag = tag => {
    if (!tags.includes(tag)) {
      setBlog(prevBlog => [{ ...prevBlog[0], tags: [...tags, tag] }]);
    } else {
      toast.error('Tag already exists');
    }
  };

  // Remove tag from blog
  const handleRemoveTag = tagToRemove => {
    setBlog(prevBlog => [{ ...prevBlog[0], tags: tags.filter(tag => tag !== tagToRemove) }]);
  };

  return (
    <section className='blogPublishForm'>
      <Toaster />

      <div className='blogPublishFormPreview'>
        <p className='blogPublishFormPreviewName'>Preview</p>
        <div className='blogPublishFormBannerContainer'>
          <img src={banner} alt='Blog Banner' className='blogPublishFormBanner' />
          <h1 className='blogPublishFormTitle'>{title}</h1>
          <p className='blogPublishFormDescription'>{description}</p>
        </div>
      </div>

      <div className='blogPublishFormTags'>
        <button className='blogPublishFormButton' onClick={handleCloseEvent}>
          <IoMdClose className='icon' />
        </button>
        <p className='blogPublishFormTagsTitle'>Blog Title</p>
        <input
          type='text'
          placeholder='Blog Title'
          value={title}
          className='blogPublishFormTagsInput'
          onChange={handleBlogTitleChange}
        />
        <p className='blogPublishFormTagsTitleDesc'>Short description about your blog</p>
        <textarea
          maxLength={200}
          value={description}
          className='blogPublishFormShortDesc'
          onChange={handleBlogDescriptionChange}
          onKeyDown={handleTitleKeyDown}></textarea>

        <p className='blogPublishFormShortDescCharacterLimited'>
          {characterLimited - description.length} characters left
        </p>

        <p className='blogPublishFormShortDescTopics'>
          Topics - (Helps in searching and ranking your blog post)
        </p>

        <div className='blogPublishFormShortTopics'>
          <input
            type='text'
            placeholder='Topics'
            className='blogPublishFormShortTopicUnit'
            onKeyDown={e => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                handleAddTag(e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
          {tags.map((tag, index) => (
            <BlogTags key={index} tag={tag} onRemove={() => handleRemoveTag(tag)} />
          ))}
        </div>
        <div className='blogPublishFormButtonContainer'>
          <button className='blogPublishFormButtonPublish'>Publish</button>
        </div>
      </div>
    </section>
  );
};
