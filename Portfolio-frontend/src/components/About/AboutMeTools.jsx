import AboutMeSoftwareBoxDescription1 from './AboutMeSoftwareBoxDescription1';
import AboutMeSoftwareBoxDescription from './AboutMeSoftwareBoxDescription';
import './AboutMeTools.scss';

const AboutMeTools = () => {
  return (
    <div className='aboutmetools'>
      <AboutMeSoftwareBoxDescription1
        figma='/figma.svg'
        figmaExpertiseIsTheDesign="Figma expertise is the designer's canvas, where ideas take shape, and aesthetics breathe life into the user experience, seamlessly integrating with the code."
      />
      <AboutMeSoftwareBoxDescription1
        aboutMeSoftwareBoxDescripGap='0rem 1.625rem'
        figma='/photoshop.svg'
        figmaIconWidth='3.125rem'
        figmaIconHeight='4.375rem'
        figmaExpertiseIsTheDesign='Photoshop proficiency transforms visual concepts into pixel-perfect reality, bridging the gap between design and development with artistic finesse.'
        aboutMeSoftwareBoxDescripPadding='0rem var(--padding-xl)'
      />
      <AboutMeSoftwareBoxDescription1
        aboutMeSoftwareBoxDescripGap='0rem 0.875rem'
        figma='/git.svg'
        figmaIconWidth='3.125rem'
        figmaIconHeight='3.125rem'
        figmaExpertiseIsTheDesign='Git mastery is the version control maestro, orchestrating collaborative coding symphonies and ensuring codebase integrity throughout its evolution.'
        aboutMeSoftwareBoxDescripPadding='0rem var(--padding-81xl)'
      />
      <AboutMeSoftwareBoxDescription />
    </div>
  );
};

export default AboutMeTools;
