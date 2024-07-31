// Portfolio-green\src\components\About\AboutMeSoftwareSkills.jsx

import AboutMeTools from './AboutMeTools';
import AboutMeSoftwareBox from './AboutMeSoftwareBox';
import './AboutMeSoftwareSkills.scss';

const AboutMeSoftwareSkills = () => {
  return (
    <div className='aboutmesoftwareskills'>
      <img
        className='projectsbackground-1-icon'
        alt='Man with a tablet in his hand standing against a wall'
        src='/projectsbackground-1@2x.webp'
      />
      <AboutMeTools />
      <AboutMeSoftwareBox />
    </div>
  );
};

export default AboutMeSoftwareSkills;
