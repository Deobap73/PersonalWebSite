import { useNavigate } from 'react-router-dom'; // Import navigation hooks
import { userContext } from '../../../contexts/context'; // Import user context
import { useContext } from 'react'; // Import useContext hook
import { Toaster, toast } from 'react-hot-toast'; // Import notification utilities
import { BlogTags } from './BlogTags'; // Import BlogTags component
import { IoMdClose } from 'react-icons/io'; // Import close icon
import axios from 'axios'; // Import axios for HTTP requests
import './BlogPublishForm.scss'; // Import styles

export const BlogPublishForm = () => {
  const characterLimited = 200; // Maximum character limit for the description

  // Destructure values from context
  const {
    blog,
    setBlog,
    setEditorState,
    userAuth: { accessToken },
  } = useContext(userContext);

  // Hook for programmatic navigation
  let navigate = useNavigate();

  // Check if blog data is available
  if (!blog || blog.length === 0) {
    return <p>No blog data available</p>; // Display message if no blog data
  }

  // Destructure current blog data
  const [currentBlog] = blog;
  const { banner, title, description, tags, content } = currentBlog;

  // Close editor event handler
  const handleCloseEvent = () => {
    setEditorState('editor'); // Set editor state back to 'editor'
  };

  // Handle changes to the blog title input
  const handleBlogTitleChange = e => {
    const input = e.target.value;
    setBlog(prevBlog => [{ ...prevBlog[0], title: input }]); // Update blog title
  };

  // Handle changes to the blog description input
  const handleBlogDescriptionChange = e => {
    const input = e.target.value;
    setBlog(prevBlog => [{ ...prevBlog[0], description: input }]); // Update blog description
  };

  // Prevent form submission on pressing Enter key in title input
  const handleTitleKeyDown = e => {
    if (e.key === 13) {
      e.preventDefault(); // Prevent default behavior of Enter key
    }
  };

  // Add a tag to the blog
  const handleAddTag = tag => {
    if (!tags.includes(tag)) {
      setBlog(prevBlog => [{ ...prevBlog[0], tags: [...tags, tag] }]); // Add new tag
    } else {
      toast.error('Tag already exists'); // Show error if tag already exists
    }
  };

  // Remove a tag from the blog
  const handleRemoveTag = tagToRemove => {
    setBlog(prevBlog => [{ ...prevBlog[0], tags: tags.filter(tag => tag !== tagToRemove) }]); // Remove tag
  };

  const publishBlog = e => {
    if (e.target.className.includes('disabled')) {
      return; // Return if the button is disabled
    }

    // Validate inputs before publishing
    if (!title.length) {
      return toast.error('Write blog title before publish'); // Show error if title is missing
    }

    if (!description.length) {
      return toast.error('Write blog description before publish'); // Show error if description is missing
    }

    if (!tags.length) {
      return toast.error('Add at least one tag before publish'); // Show error if no tags are added
    }

    // Display loading toast
    let loadingToast = toast.loading('Publishing...');

    // Disable the publish button
    e.target.classList.add('disabled');

    // Create blog object to send to the server
    let blogObject = {
      title,
      description,
      tags,
      banner,
      content,
      draft: false, // Indicate that this is not a draft
    };

    // Send POST request to create a new blog post
    axios
      .post(`${import.meta.env.VITE_SERVER_DOMAIN}/create-blog-post`, blogObject, {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Include authentication token
        },
      })
      .then(() => {
        // On successful response
        e.target.classList.remove('disabled'); // Re-enable the button
        toast.dismiss(loadingToast); // Dismiss loading toast
        toast.success('Success 👌'); // Show success toast

        // Clear the form fields
        setBlog([{ title: '', description: '', tags: [], banner: '', content: '' }]);
        setEditorState('editor'); // Reset editor state

        setTimeout(() => {
          navigate('/blog'); // Redirect to the blog page after a short delay
        }, 500);
      })
      .catch(({ response }) => {
        // On error response
        e.target.classList.remove('disabled'); // Re-enable the button
        toast.dismiss(loadingToast); // Dismiss loading toast
        toast.error(response?.data?.error || 'An error occurred'); // Show error toast
      });
  };

  return (
    <section className='blogPublishForm'>
      <Toaster /> {/* Toaster component for notifications */}
      <div className='blogPublishFormPreview'>
        <p className='blogPublishFormPreviewName'>Preview</p>
        <div className='blogPublishFormBannerContainer'>
          <img src={banner} alt='Blog Banner' className='blogPublishFormBanner' />{' '}
          {/* Blog banner image */}
          <h1 className='blogPublishFormTitle'>{title}</h1> {/* Blog title */}
          <p className='blogPublishFormDescription'>{description}</p> {/* Blog description */}
        </div>
      </div>
      <div className='blogPublishFormTags'>
        <button className='blogPublishFormButton' onClick={handleCloseEvent}>
          <IoMdClose className='icon' /> {/* Close button */}
        </button>
        <p className='blogPublishFormTagsTitle'>Blog Title</p>
        <input
          type='text'
          placeholder='Blog Title'
          value={title}
          className='blogPublishFormTagsInput'
          onChange={handleBlogTitleChange} // Handle title change
        />
        <p className='blogPublishFormTagsTitleDesc'>Short description about your blog</p>
        <textarea
          maxLength={200}
          value={description}
          className='blogPublishFormShortDesc'
          onChange={handleBlogDescriptionChange} // Handle description change
          onKeyDown={handleTitleKeyDown} // Prevent Enter key default action
        ></textarea>

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
                handleAddTag(e.target.value.trim()); // Add tag on Enter key
                e.target.value = ''; // Clear input after adding tag
              }
            }}
          />
          {tags.map((tag, index) => (
            <BlogTags key={index} tag={tag} onRemove={() => handleRemoveTag(tag)} /> // Render tags with remove option
          ))}
        </div>
        <div className='blogPublishFormButtonContainer'>
          <button className='blogPublishFormButtonPublish' onClick={publishBlog}>
            Publish
          </button>
        </div>
      </div>
    </section>
  );
};
