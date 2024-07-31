// src/components/ProjectsMain.jsx
import NavigationBar from '../Navigation/NavigationBar';
import images from '../../assets/imageIndex';
import './ProjectsMain.scss';

const ProjectsMain = () => {
  return (
    <section className='projectsMain'>
      <div className='projectsSubMainPresentation'>
        <img
          className='ProjectsImage'
          alt='Diploma JavaScript'
          src={images.projectssubmainpresentation}
        />
        <div className='projectsSentence1'>
          <p className='enter-the-code-based-container'>
            <span>{`Enter the code-based universe of my projects page, where each site and application is not just the culmination of lines and functions, but a living testament to my `}</span>
            <span className='web-development'>web development.</span>
          </p>
        </div>
        <NavigationBar context='projects' />
      </div>
    </section>
  );
};

export default ProjectsMain;
