// src/components/AboutMeExpressJsBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeExpressJsBox.scss';

const AboutMeExpressJsBox = () => {
  return (
    <div className='aboutMeExpressJsBox'>
      <div className='languageSymbolExpressJs'>
        <img
          className='languageSymbolExpressJs-item'
          alt=''
          src={images.ExpressJSLogo}
        />
      </div>
      <div className='planningExpressJs'>
        <h2 className='expressJs'>Express.JS</h2>
        <p className='expressJs-the-swift'>
          Express.js, the swift messenger of the web, paves the way for
          developers to deliver data and services at the speed of thought.
        </p>
      </div>
      <div className='timeLineExpressJs'>
        <h3 className='oct'>23 Oct</h3>
        <div className='timeline-itemExpressJs' />
        <h3 className='oct'>2023</h3>
      </div>
      <img
        className='aboutMeExpressJsBox-child'
        alt='Example of a few lines of code in Express.JS'
        src={images.rectangleExpressJS}
      />
    </div>
  );
};

export default AboutMeExpressJsBox;
