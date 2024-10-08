// Portfolio-green\src\components\About\AboutMeSkillsContainer.jsx

import AboutMeSkillsProjectManager from './AboutMeSkillsProjectManager';
import AboutMeCodingSkills from './AboutMeCodingSkills';
import AboutMeWorkExperience from './AboutMeWorkExperience';
import AboutMeSoftSkillsBox from './AboutMeSoftSkillsBox';
import AboutMeSoftwareSkills from './AboutMeSoftwareSkills';

import './AboutMeSkillsContainer.scss';

const AboutMeSkillsContainer = () => {
  return (
    <section className='aboutMeSkillsContainer'>
      <AboutMeSkillsProjectManager />
      <AboutMeCodingSkills />
      <AboutMeWorkExperience />
      <AboutMeSoftSkillsBox />
      <AboutMeSoftwareSkills />
    </section>
  );
};

export default AboutMeSkillsContainer;
