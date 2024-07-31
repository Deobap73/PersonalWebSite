// src/components/TimeLine.jsx

import PropTypes from 'prop-types';
import './TimeLine.scss';
import images from '../../assets/imageIndex';

const TimeLine = ({ type }) => {
  let icon = null;

  switch (type) {
    case 'briefcase':
      icon = <img className='briefcase-icon' alt='' src={images.briefcase} />;
      break;
    case 'graduation':
      icon = <img className='graduation-icon' alt='' src={images.graduation} />;
      break;
    case 'comments':
      icon = <img className='comments-icon' alt='' src={images.comments} />;
      break;
    default:
      break;
  }

  return <div className={`timeline ${type}`}>{icon}</div>;
};

TimeLine.propTypes = {
  type: PropTypes.oneOf(['briefcase', 'graduation', 'comments']).isRequired, // Define PropTypes para 'type'
};

export default TimeLine;
