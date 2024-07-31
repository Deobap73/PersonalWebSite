// src/components/FooterContactMe.jsx

import { useCallback } from 'react';
import images from '../../assets/imageIndex';
import './FooterContactMe.scss';

const FooterContactMe = () => {
  const onGithubClick = useCallback(() => {
    window.open('https://github.com/Deobap73');
  }, []);

  const onLinkedinClick = useCallback(() => {
    window.open('https://www.linkedin.com/in/deolindobaptista/');
  }, []);

  const onInstagramClick = useCallback(() => {
    window.open('https://www.linkedin.com/in/deolindo-baptista-101a49258/');
  }, []);

  return (
    <div className='contactme1'>
      <h3 className='contact-me2'>Contact Me</h3>
      <h4 className='pocking-germany2'>Pocking, Germany</h4>
      <h4 className='pocking-germany2'>deobap@gmail.com</h4>
      <h4 className='h41'>
        <p className='p2'>+49 176 34644129</p>
      </h4>
      <div className='socialnetworks1'>
        <a
          className='github'
          href='https://github.com/Deobap73'
          target='_blank'
          onClick={onGithubClick}>
          <img className='vector-icon7' alt='' src={images.github} />
        </a>
        <a
          className='github'
          href='https://www.linkedin.com/in/deolindobaptista/'
          target='_blank'
          onClick={onLinkedinClick}>
          <img className='vector-icon8' alt='' src={images.linkedin} />
        </a>
        <a
          className='github'
          href='https://www.linkedin.com/in/deolindo-baptista-101a49258/'
          target='_blank'
          onClick={onInstagramClick}>
          <img className='vector-icon8' alt='' src={images.instagram} />
        </a>
      </div>
    </div>
  );
};

export default FooterContactMe;
