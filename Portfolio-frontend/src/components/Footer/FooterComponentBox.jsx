// src/components/FooterContactMe.jsx

import FooterMeAsDeveloper from './FooterMeAsDeveloper';
import FooterSomeProjects from './FooterSomeProjects';
import FooterContactMe from './FooterContactMe';
import './FooterComponentBox.scss';

const FooterComponentBox = () => {
  return (
    <div className='deobutton-group'>
      <FooterMeAsDeveloper />
      <FooterSomeProjects />
      <FooterContactMe />
    </div>
  );
};

export default FooterComponentBox;
