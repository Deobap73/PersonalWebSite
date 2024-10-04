// PersonalWebSite\Portfolio-frontend\src\components\About\aboutMeProjectManagerLineOfTime.jsx

import images from '../../assets/imageIndex';
import './AboutMeProjectManagerLineOfTime.scss';

const AboutMeProjectManagerLineOfTime = () => {
  return (
    <div className='aboutMeProjectManagerLineOfTime'>
      <img
        className='projectManagerLine-icon'
        alt='Graduation line'
        src={images.projectManagerLine}
      />
    </div>
  );
};

export default AboutMeProjectManagerLineOfTime;
