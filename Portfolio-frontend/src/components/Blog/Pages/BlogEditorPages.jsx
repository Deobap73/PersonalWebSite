// PersonalWebSite\Portfolio-frontend\src\components\Blog\Pages\BlogEditorPages.jsx

import { useContext } from 'react';
import { userContext } from '../../../contexts/context';
import './BlogEditorPages.scss';
import { BlogEditor } from '../blogApp/BlogEditor';
import { BlogPublishForm } from '../blogApp/BlogPublishForm';

export const BlogEditorPages = () => {
  const { editorState, setEditorState } = useContext(userContext);

  return <>{editorState === 'editor' ? <BlogEditor /> : <BlogPublishForm />}</>;
};
