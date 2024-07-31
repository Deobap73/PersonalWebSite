// Portfolio-green\src\components\About\AboutMeCodingSkills.jsx

import AboutMePlanning from './AboutMePlanning';
import AboutMeMongoDbBox from './AboutMeMongoDbBox';
import AboutMeExpressJsBox from './AboutMeExpressJsBox';
import AboutMeNodeJsBox from './AboutMeNodeJsBox';
import AboutMeReactBox from './AboutMeReactBox';
import AboutMeJavaScriptBox from './AboutMeJavaScriptBox';
import AboutMeCssBox from './AboutMeCssBox';
import AboutMeHtmlBox from './AboutMeHtmlBox';
import AboutMeSoftwareSkillsBox from './AboutMeSoftwareSkillsBox';
import AboutMeLineOfTime from './AboutMeLineOfTime';
import './AboutMeCodingSkills.scss';

const AboutMeCodingSkills = () => {
  return (
    <section className='aboutMeCodeingSkills'>
      <AboutMeSoftwareSkillsBox />
      <AboutMeHtmlBox />
      <AboutMeCssBox />
      <AboutMeJavaScriptBox />
      <AboutMeReactBox />
      <AboutMeNodeJsBox />
      <AboutMeExpressJsBox />
      <AboutMeMongoDbBox />
      <AboutMePlanning />
      <AboutMeLineOfTime />
    </section>
  );
};

export default AboutMeCodingSkills;
