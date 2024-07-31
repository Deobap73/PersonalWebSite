// src/components/LeadershipExperienceBoxLeft.jsx

import PropTypes from 'prop-types';
import './LeadershipExperienceBoxLeft.scss';

const LeadershipExperienceBoxLeft = ({
  dimensionsId,
  skillsDescription,
  teamLeadershipDescription,
}) => {
  return (
    <div className='leadershipExperienceBoxLeft'>
      <div className='leadershipExperienceBoxLeftRectangle' />
      <img
        className='leadershipExperienceBoxLeftPicture-icon'
        alt='Man in suit in office'
        src={dimensionsId}
      />
      <div className='rectangle-parent'>
        <div className='rectangle-div' />
        <div className='leadership-parent'>
          <h2 className='leadership'>{skillsDescription}</h2>
          <p className='leadership-skills-were'>{teamLeadershipDescription}</p>
        </div>
      </div>
    </div>
  );
};

LeadershipExperienceBoxLeft.propTypes = {
  dimensionsId: PropTypes.string.isRequired,
  skillsDescription: PropTypes.string.isRequired,
  teamLeadershipDescription: PropTypes.string.isRequired,
};

export default LeadershipExperienceBoxLeft;
