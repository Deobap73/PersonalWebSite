// src/components/AboutMeNodeJsBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeNodeJsBox.scss';

const AboutMeNodeJsBox = () => {
  return (
    <div className='aboutMeNodeJsBox'>
      <div className='languageSymbolNodeJs'>
        <img className='node-icon' alt='' src={images.node} />
      </div>
      <div className='planningNodeJs'>
        <h2 className='nodejs'>Node.JS</h2>
        <h3 className='nodejs-the-digital'>
          Node.js, the digital conductor, orchestrates the symphony of
          server-side operations, transforming data into harmony on the web
        </h3>
      </div>
      <div className='timeLineNodeJs'>
        <h2 className='oct1'>05 Oct</h2>
        <div className='timeline-inner' />
        <h2 className='h2'>2023</h2>
      </div>
      <img
        className='aboutMeNodeJsBox-child'
        alt='Example of a few lines of code in Node.JS'
        src={images.rectangleNodeJs}
      />
    </div>
  );
};

export default AboutMeNodeJsBox;
