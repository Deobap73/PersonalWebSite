// src/components/HomeMain.jsx

import NavigationBar from '../Navigation/NavigationBar';
import images from '../../assets/imageIndex';
import './HomeMain.scss';

const HomeMain = () => {
  return (
    <section className='homeMain'>
      <section className='homeSubMain'>
        <img
          className='mainImage'
          alt='Diploma JavaScript'
          src={images.homeSubMain}
        />
        <section className='sloganContainer'>
          <section className='mainSlogan'>
            <h2 className='explore-the-magic-container'>
              <span>{`Explore the magic of the `}</span>
              <span className='web'>web</span>
              <span>{` through the eyes of a passionate `}</span>
              <span className='web'>developer</span>
            </h2>
          </section>
          <NavigationBar context='home' />
        </section>
      </section>
    </section>
  );
};

export default HomeMain;
