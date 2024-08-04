// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogInput.jsx

import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './BlogInput.scss';

const BlogInput = ({ name, type, id, value, placeholder, icon: Icon }) => {
  const [inputType, setInputType] = useState(type);

  //Function to switch input type between "password" and "text"
  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className='blogInput'>
      {Icon && <Icon className='inputIconLeft' />} {/* Left icon */}
      <input
        className='blogInputBox'
        name={name}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
      />
      {/* Icon to toggle password visibility if type is 'password' */}
      {type === 'password' && (
        <span onClick={togglePasswordVisibility} className='inputIconRight'>
          {inputType === 'password' ? <FaEyeSlash /> : <FaRegEye />}{' '}
          {/*Icons to hide/show password */}
        </span>
      )}
    </div>
  );
};

BlogInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType])
    .isRequired,
};

export default BlogInput;
