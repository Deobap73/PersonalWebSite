// Portfolio-green\src\components\About\LeadershipExperienceBoxRight.jsx

import PropTypes from 'prop-types';
import './LeadershipExperienceBoxRight.scss';

const AboutMeExperienceBoxRight = ({
  experienceBoxLeftPicture,
  communication,
  effectiveCommunicationFac,
}) => {
  return (
    <div className='aboutMeExperienceBoxRight'>
      <div className='aboutMeExperienceBoxRightRectangle-parent'>
        <div className='aboutMeExperienceBoxRight1' />
        <img
          className='aboutMeExperienceBoxRight-icon1'
          alt='Man in speaker position in a room with people listening to him'
          src={experienceBoxLeftPicture}
        />
      </div>
      <div className='rectangle-group'>
        <div className='frame-child2' />
        <div className='communication-parent'>
          <h2 className='communication'>{communication}</h2>
          <p className='effective-communication-facility'>
            {effectiveCommunicationFac}
          </p>
        </div>
      </div>
    </div>
  );
};

AboutMeExperienceBoxRight.propTypes = {
  aboutMeExperienceBoxRightAlignSelf: PropTypes.string,
  aboutMeExperienceBoxRightWidth: PropTypes.string,
  frameDivLeft: PropTypes.number,
  experienceBoxLeftPicture: PropTypes.string.isRequired,
  communication: PropTypes.string.isRequired,
  communicationWidth: PropTypes.string,
  effectiveCommunicationFac: PropTypes.string.isRequired,
  effectiveCommunicationFacFontSize: PropTypes.string,
  effectiveCommunicationFacFontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default AboutMeExperienceBoxRight;
