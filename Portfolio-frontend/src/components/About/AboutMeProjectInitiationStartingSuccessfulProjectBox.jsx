// PersonalWebSite\Portfolio-frontend\src\components\About\AboutMeProjectInitiationStartingSuccessfulProjectBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeProjectInitiationStartingSuccessfulProjectBox.scss';

const AboutMeProjectInitiationStartingSuccessfulProjectBox = () => {
  return (
    <div className='aboutMeProjectInitiationBox'>
      <img
        className='AboutMeProjectInitiation-child'
        alt='Example of a few lines of code in HTML'
        src={images.ProjectInitiationStartingSuccessfulProject}
      />
      <div className='planning'>
        <h2 className='aboutMeProjectInitiation'>
          Project Initiation: Starting a Successful Project
        </h2>
        <p className='aboutMeProjectInitiation-the-backbone'>
          Understand the significance of the initiation phase of the project life cycle.
        </p>
        <p className='aboutMeProjectInitiation-the-backbone'>
          Complete a stakeholder analysis and utilize RACI charts to define and communicate project
          team member responsibilities.
        </p>
        <p className='aboutMeProjectInitiation-the-backbone'>
          Understand the key components of project charters and develop a project charter for
          project initiation.
        </p>
        <p className='aboutMeProjectInitiation-the-backbone'>
          Evaluate various project management tools to meet project needs.
        </p>
      </div>
      <div className='aboutMeProjectInitiationTimeLine'>
        <h3 className='feb'>06 Set</h3>
        <div className='timeline-child' />
        <h3 className='feb'>2024</h3>
      </div>
    </div>
  );
};

export default AboutMeProjectInitiationStartingSuccessfulProjectBox;
