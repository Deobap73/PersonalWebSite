// src/components/FooterMeAsDeveloper.scss
import images from '../../assets/imageIndex';
import './FooterSomeProjects.scss';

const FooterSomeProjects = () => {
  return (
    <div className='someprojects1'>
      <h3 className='some-projects1'>Some Projects</h3>
      <a
        className='firstproject1'
        href='https://github.com/Deobap73/Final-project'
        target='_blank'>
        <img
          className='dot-circle-icon'
          alt='dot-circle-icon'
          src={images.dotCircle}
        />
        <div className='first-project1'>First Project</div>
      </a>
      <a
        className='firstproject1'
        href='https://github.com/Deobap73/JS-Calculator'
        target='_blank'>
        <img
          className='dot-circle-icon'
          alt='dot-circle-icon'
          src={images.dotCircle}
        />
        <div className='first-project1'>JS - Calculator</div>
      </a>
      <a
        className='firstproject1'
        href='https://github.com/Deobap73/React-project-Our-Journey-Around-the-World'
        target='_blank'>
        <img
          className='dot-circle-icon'
          alt='dot-circle-icon'
          src={images.dotCircle}
        />
        <div className='first-project1'>React project presentation</div>
      </a>
      <a
        className='firstproject1'
        href='https://github.com/Deobap73/AI-image-generator'
        target='_blank'>
        <img
          className='dot-circle-icon'
          alt='dot-circle-icon'
          src={images.dotCircle}
        />
        <div className='first-project1'>Image AI Generator Project</div>
      </a>
    </div>
  );
};

export default FooterSomeProjects;
