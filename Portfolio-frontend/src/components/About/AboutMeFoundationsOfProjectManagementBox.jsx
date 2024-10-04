// PersonalWebSite\Portfolio-frontend\src\components\About\AboutMeFoundationsOfProjectManagementBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeFoundationsOfProjectManagementBox.scss';

const AboutMeFoundationsOfProjectManagementBox = () => {
  return (
    <div className='FoundationsOfProjectManagementBox'>
      <img
        className='FoundationsOfProjectManagementBox-child'
        alt='Example of a few lines of code in HTML'
        src={images.FoundationsOfProjectManagement}
      />
      <div className='planning'>
        <h2 className='FoundationsOfProjectManagement'>Foundations Of Project Management</h2>
        <p className='FoundationsOfProjectManagement-description'>
          Describe project management skills, roles, and responsibilities across a variety of
          industries
        </p>
        <p className='FoundationsOfProjectManagement-description'>
          Define organizational structure and organizational culture and explain how it impacts
          project management.
        </p>
        <p className='FoundationsOfProjectManagement-description'>
          Explain the project management life cycle and compare different program management
          methodologies
        </p>
      </div>
      <div className='timeLine'>
        <h3 className='feb'>22 Aug</h3>
        <div className='timeline-child' />
        <h3 className='feb'>2024</h3>
      </div>
    </div>
  );
};

export default AboutMeFoundationsOfProjectManagementBox;
