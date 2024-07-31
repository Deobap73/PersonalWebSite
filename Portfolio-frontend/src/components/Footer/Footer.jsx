// src/components/Footer.jsx

import FooterComponentBox from './FooterComponentBox';
import images from '../../assets/imageIndex';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterComponentBox />
      <div className='footer-inner'>
        <div className='copyright-parent'>
          <img
            className='copyright-icon'
            alt='copyright Icon'
            src={images.copyright}
          />
          <h3 className='copyright-deolindo'>
            Copyright - Deolindo Baptista | All rights reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
