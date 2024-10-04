// PersonalWebSite\Portfolio-frontend\src\components\About\AboutMeSkillsProjectManager.jsx

import './aboutMeSkillsProjectManager.scss';
import AboutMeSkillsProjectManagerBox from './AboutMeSkillsProjectManagerBox';
import AboutMeFoundationsOfProjectManagementBox from './AboutMeFoundationsOfProjectManagementBox';
import AboutMeProjectInitiationStartingSuccessfulProjectBox from './AboutMeProjectInitiationStartingSuccessfulProjectBox';
import AboutMeProjectPlanningPuttingItAllTogether from './AboutMeProjectPlanningPuttingItAllTogether';
import AboutMeProjectManagerLineOfTime from './aboutMeProjectManagerLineOfTime';

export default function AboutMeSkillsProjectManager() {
  return (
    <section className='AboutMeSkillsProjectManager'>
      <AboutMeSkillsProjectManagerBox />
      <AboutMeFoundationsOfProjectManagementBox />
      <AboutMeProjectInitiationStartingSuccessfulProjectBox />
      <AboutMeProjectPlanningPuttingItAllTogether />
      <AboutMeProjectManagerLineOfTime />
    </section>
  );
}
