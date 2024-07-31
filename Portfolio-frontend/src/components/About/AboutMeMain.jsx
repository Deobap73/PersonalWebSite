// Portfolio-green\src\components\About\AboutMeMain.jsx

import AboutMeWelcomeContainerBox from './AboutMeWelcomeContainerBox';
import NavigationBar from '../Navigation/NavigationBar';
import './AboutMeMain.scss';

const AboutMeMain = () => {
  return (
    <section className='aboutMeMain'>
      <div className='aboutMeTitle'>
        <div className='verticalLine'>
          <hr className='line' />
        </div>
        <h2 className='about-me'>About Me</h2>
      </div>
      <AboutMeWelcomeContainerBox className='aboutMeWelcomeContainerBox' />
      <NavigationBar context='about' className='navigationBar' />
    </section>
  );
};

export default AboutMeMain;
