// src/components/HomeContactContainer.jsx

import HomeEmailContainer from './HomeEmailContainer';
import './HomeContactContainer.scss';
import DeoButton from '../Buttons/DeoButton';

const HomeContactContainer = () => {
  return (
    <section className='homeContactContainer'>
      <DeoButton />
      <section className='homeContact'>
        <div className='homeContactContainerPresentation'>
          <div className='verticalLine'>
            <hr className='line' />
          </div>
          <div className='contactsLogan'>
            <h2 className='contact-me'>Contact Me</h2>

            <p className='lets-talk-share'>
              Let´s talk, share your ideas or meet me
            </p>
          </div>
        </div>
        <HomeEmailContainer />
      </section>
    </section>
  );
};

export default HomeContactContainer;
