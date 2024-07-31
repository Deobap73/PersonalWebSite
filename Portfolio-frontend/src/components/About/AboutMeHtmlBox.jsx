// Portfolio-green\src\components\About\AboutMeHtmlBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeHtmlBox.scss';

const AboutMeHtmlBox = () => {
  return (
    <div className='aboutMeHtmlBox'>
      <div className='languageSymbol'>
        <img className='html-icon' alt='' src={images.html5} />
      </div>
      <img
        className='aboutMeHtmlBox-child'
        alt='Example of a few lines of code in HTML'
        src={images.rectangleHTML}
      />
      <div className='planning'>
        <h2 className='html'>HTML</h2>
        <p className='html-the-backbone'>
          HTML, the backbone of the web, lets developers weave the threads of
          information into a tapestry of knowledge for the world to explore
        </p>
      </div>
      <div className='timeLine'>
        <h3 className='feb'>07 Feb</h3>
        <div className='timeline-child' />
        <h3 className='feb'>2023</h3>
      </div>
    </div>
  );
};

export default AboutMeHtmlBox;
