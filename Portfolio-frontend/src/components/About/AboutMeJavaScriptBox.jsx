// src/components/AboutMeJavaScriptBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeJavaScriptBox.scss';

const AboutMeJavaScriptBox = () => {
  return (
    <div className='aboutMeJavaScriptBox'>
      <div className='languageSymbolJavaScript'>
        <img className='javaScript-icon' alt='' src={images.javascript} />
      </div>
      <div className='planningJavaScript'>
        <h2 className='javascript'>JavaScript</h2>
        <p className='JavaScript-the-spark'>
          JavaScript, the spark that ignites interactivity, lets developers
          breathe life into web pages and captivate users with dynamic
          experiences.
        </p>
      </div>
      <div className='timeLineJavaScript'>
        <h3 className='mai'>04 Mai</h3>
        <div className='timeline-child1' />
        <h3 className='mai'>2023</h3>
      </div>
      <img
        className='aboutMeJavaScriptBox-child'
        alt='Example of a few lines of code in JavaScript'
        src={images.rectangleJavaScript}
      />
    </div>
  );
};

export default AboutMeJavaScriptBox;
