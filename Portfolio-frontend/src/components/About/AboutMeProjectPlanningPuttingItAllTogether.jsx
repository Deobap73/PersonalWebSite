// PersonalWebSite\Portfolio-frontend\src\components\About\AboutMeProjectPlanningPuttingItAllTogether.jsx

import images from '../../assets/imageIndex';
import './AboutMeProjectPlanningPuttingItAllTogether.scss';

const AboutMeProjectPlanningPuttingItAllTogether = () => {
  return (
    <div className='aboutMeProjectPlanningPuttingBox'>
      <img
        className='aboutMeProjectPlanningPuttingBox-child'
        alt='Example of a few lines of code in HTML'
        src={images.ProjectPlanningPuttingItAllTogether}
      />
      <div className='aboutMeProjectPlanningPuttingPlanning'>
        <h2 className='aboutMeProjectPlanningPutting'>Project Planning: Putting It All Together</h2>
        <p className='aboutMeProjectPlanningPutting-the-backbone'>
          Describe the components of the project planning phase and their significance.
        </p>
        <p className='aboutMeProjectPlanningPutting-the-backbone'>
          Describe how to estimate, track, and maintain a budget.
        </p>
        <p className='aboutMeProjectPlanningPutting-the-backbone'>
          Identify tools and best practices to build a project plan and risk management plan.
        </p>
        <p className='aboutMeProjectPlanningPutting-the-backbone'>
          Draft a communication plan and explain how to manage it.
        </p>
      </div>
      <div className='aboutMeProjectPlanningPuttingTimeLine'>
        <h3 className='feb'>30 Set</h3>
        <div className='timeline-child' />
        <h3 className='feb'>2024</h3>
      </div>
    </div>
  );
};

export default AboutMeProjectPlanningPuttingItAllTogether;
