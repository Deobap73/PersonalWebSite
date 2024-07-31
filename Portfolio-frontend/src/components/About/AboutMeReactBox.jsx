// src/components/AboutMeReactBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeReactBox.scss';

const AboutMeReactBox = () => {
  return (
    <div className='aboutMeReactBox'>
      <div className='languageSymbolReact'>
        <img className='react-icon' alt='' src={images.react} />
      </div>
      <div className='planningReact'>
        <h2 className='react'>React</h2>
        <p className='react-is-the'>
          React is the artist`s palette, allowing developers to sculpt intricate
          user interfaces that mirror the beauty and complexity of the real
          world.
        </p>
      </div>
      <div className='timeLineReact'>
        <h3 className='jul'>13 Jul</h3>
        <div className='ellipse-div' />
        <h3 className='jul'>2023</h3>
      </div>
      <img
        className='aboutMeReactBox-child'
        id='Example of a few lines of code in React'
        alt=''
        src={images.rectangleReact}
      />
    </div>
  );
};

export default AboutMeReactBox;
