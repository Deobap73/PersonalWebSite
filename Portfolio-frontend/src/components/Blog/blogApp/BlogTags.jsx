// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogTags.jsx

import { IoMdClose } from 'react-icons/io';
import './BlogTags.scss';
import { useState } from 'react';

export const BlogTags = ({ tag, onRemove }) => {
  const [editableTag, setEditableTag] = useState(tag);

  const handleTagChange = e => {
    setEditableTag(e.target.value);
  };

  return (
    <div className='blogTagsContainer'>
      <input type='text' value={editableTag} onChange={handleTagChange} className='blogTags-Tag' />
      <button className='blogTagsButton' onClick={onRemove}>
        <IoMdClose className='blogTagsIcon' />
      </button>
    </div>
  );
};
