// PersonalWebSite\Portfolio-frontend\src\components\Blog\Pages\BlogEditorPages.jsx

import { useContext } from 'react';
import { userContext } from '../../../contexts/context';
import { BlogEditor } from '../blogApp/BlogEditor';
import { BlogPublishForm } from '../blogApp/BlogPublishForm';
import './BlogEditorPages.scss';

export const BlogEditorPages = () => {
  const { editorState, blog, setBlog } = useContext(userContext);

  return (
    <>
      {editorState === 'editor' ? (
        <BlogEditor blog={blog} setBlog={setBlog} />
      ) : (
        <BlogPublishForm blog={blog} setBlog={setBlog} />
      )}
    </>
  );
};
