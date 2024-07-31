// Portfolio-green\src\components\About\AboutMeWelcomeContainerBox.jsx

import images from '../../assets/imageIndex';
import AboutMeWelcomeContainer from './AboutMeWelcomeContainer';
import './AboutMeWelcomeContainerBox.scss';

const AboutMeWelcomeContainerBox = () => {
  return (
    <section className='aboutMeWelcomeContainer-parent'>
      <AboutMeWelcomeContainer />
      <img
        className='aboutMeBackground-1-icon'
        alt='Front image of the page owner'
        src={images.aboutMeBackground}
      />
    </section>
  );
};

export default AboutMeWelcomeContainerBox;
