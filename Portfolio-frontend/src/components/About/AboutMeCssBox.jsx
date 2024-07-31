// src/components/AboutMeCssBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeCssBox.scss';

const AboutMeCssBox = () => {
  return (
    <div className='aboutMeCssBox'>
      <div className='languageSymbolCss'>
        <img className='css-icon' alt='' src={images.css} />
      </div>
      <div className='planningCss'>
        <h2 className='css1'>CSS</h2>
        <p className='css-empowers-web'>
          CSS empowers web designers to paint the digital canvas with colors,
          bringing life and personality to the Internet`s visual landscape.
        </p>
      </div>
      <div className='timelineCss'>
        <h3 className='mar'>02 Mar</h3>
        <div className='timelineCss-child2' />
        <h3 className='mar'>2023</h3>
      </div>
      <img
        className='aboutMeCssBox-child'
        alt='Example of a few lines of code in CSS'
        src={images.rectangleCss}
      />
    </div>
  );
};

export default AboutMeCssBox;
