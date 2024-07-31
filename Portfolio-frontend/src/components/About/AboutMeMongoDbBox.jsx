// src/components/AboutMeMongoDbBox.jsx

import images from '../../assets/imageIndex';
import './AboutMeMongoDbBox.scss';

const AboutMeMongoDbBox = () => {
  return (
    <div className='aboutMeMongoDBBox'>
      <div className='LanguageSymbolMongoDB'>
        <img className='MongoDB-icon' alt='' src={images.MongoDB} />
      </div>
      <div className='planningMongoDB'>
        <h2 className='mongodb'>MongoDB</h2>
        <p className='mongodb-the-data'>
          MongoDB, the data explorer, lets developers chart uncharted
          territories of information, forging new paths to insights and
          discovery.
        </p>
      </div>
      <div className='timeLineMongoDB'>
        <h3 className='nov'>06 Nov</h3>
        <div className='timeline-child' />
        <h3 className='nov'>2023</h3>
      </div>
      <img
        className='aboutMeMongoDBBox-child'
        alt='Example of a few lines of code in MongoDB'
        src={images.rectangleMongoDB}
      />
    </div>
  );
};

export default AboutMeMongoDbBox;
