// src/components/ProjectsButton.jsx

import PropTypes from 'prop-types';
import './ProjectsButton.scss';

const ProjectsButton = ({ urls }) => {
  const handleClick = () => {
    // Check if urls is a string
    if (typeof urls === 'string') {
      window.open(urls, '_blank');
    } else if (Array.isArray(urls)) {
      // If urls is an array, open each URL in a new tab
      urls.forEach((url) => {
        window.open(url, '_blank');
      });
    }
  };

  return (
    <button className='projectsbutton' onClick={handleClick}>
      <b className='visit-the-code'>Visit the code</b>
    </button>
  );
};

ProjectsButton.propTypes = {
  urls: PropTypes.oneOfType([
    PropTypes.string, // Only accepts a URL as a string
    PropTypes.arrayOf(PropTypes.string), // Or an array of URLs
  ]).isRequired,
};

export default ProjectsButton;
