// src/components/AboutMeLineOfTime.jsx

import { useEffect, useState } from 'react';
import images from '../../assets/imageIndex';
import './AboutMeLineOfTime.scss';

const AboutMeLineOfTime = () => {
  const [src, setSrc] = useState(images.graduationLine);

  useEffect(() => {
    const updateSrc = () => {
      if (window.matchMedia('(max-width: 480px)').matches) {
        setSrc(images.graduationLineSmall); // Change to the desired image
      } else if (window.matchMedia('(max-width: 650px)').matches) {
        setSrc(images.graduationLineMediumSmall); // Change to the desired image
      } else if (window.matchMedia('(max-width: 768px)').matches) {
        setSrc(images.graduationLineMedium); // Change to the desired image
      } else if (window.matchMedia('(max-width: 1180px)').matches) {
        setSrc(images.graduationLineLarge); // Change to the desired image
      } else {
        setSrc(images.graduationLine); // Default image
      }
    };

    updateSrc(); // Update src when resizing
    window.addEventListener('resize', updateSrc); // It calls updateSrc on component initialization and adds an event listener to update src when resizing the window.

    return () => window.removeEventListener('resize', updateSrc);
  }, []);

  return (
    <div className='aboutMeLineOfTime'>
      <img className='graduationLine-icon' alt='Graduation line' src={src} />
    </div>
  );
};

export default AboutMeLineOfTime;
