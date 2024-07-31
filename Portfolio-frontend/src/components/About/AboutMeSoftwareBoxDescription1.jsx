import { useMemo } from 'react';
import './AboutMeSoftwareBoxDescription1.scss';

const AboutMeSoftwareBoxDescription1 = ({
  aboutMeSoftwareBoxDescripGap,
  figma,
  figmaIconWidth,
  figmaIconHeight,
  figmaExpertiseIsTheDesign,
  aboutMeSoftwareBoxDescripPadding,
}) => {
  const aboutMeSoftwareBoxDescriptionStyle = useMemo(() => {
    return {
      gap: aboutMeSoftwareBoxDescripGap,
      padding: aboutMeSoftwareBoxDescripPadding,
    };
  }, [aboutMeSoftwareBoxDescripGap, aboutMeSoftwareBoxDescripPadding]);

  const figmaIconStyle = useMemo(() => {
    return {
      width: figmaIconWidth,
      height: figmaIconHeight,
    };
  }, [figmaIconWidth, figmaIconHeight]);

  return (
    <div
      className='aboutmesoftwareboxdescription'
      style={aboutMeSoftwareBoxDescriptionStyle}>
      <img className='figma-icon' alt='' src={figma} style={figmaIconStyle} />
      <p className='figma-expertise-is'>{figmaExpertiseIsTheDesign}</p>
    </div>
  );
};

export default AboutMeSoftwareBoxDescription1;
