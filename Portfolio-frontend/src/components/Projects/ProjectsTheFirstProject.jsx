// src/components/ProjectsTheFirstProject.jsx

import images from '../../assets/imageIndex';
import ProjectsButton from './ProjectsButton';
import './ProjectsTheFirstProject.scss';

const ProjectsTheFirstProject = () => {
  return (
    <div className='projectsTheFirstProject'>
      <img
        className='projectsTheFirstProject-inner'
        alt='Image from a website named DBpoxy'
        src={images.Project1Home}
      />
      <img
        className='projectsTheFirstProject-child'
        alt='Image from a website named DBpoxy'
        src={images.Project1About}
      />
      <img
        className='projectsTheFirstProject-item'
        alt='Image from a website named DBpoxy'
        src={images.Project1About1}
      />
      <div className='projectsTheFirstProjectDescription'>
        <h2 className='the-project-dbpoxy'>The project DBPoxy</h2>
        <p className='this-was-the-container'>
          <span className='this-was-the'>{`This was the first project was created to demonstrate the knowledge gained in the orientation course. `}</span>
          <span className='this-was-the'>&nbsp;</span>
          <span className='this-was-the'>
            A basic project for a simple website for a business called "dbpoxy"
            using HTML (Hypertext Markup Language) which is the standard markup
            language for creating and designing web pages and CSS (Cascading
            Style Sheets) the style sheet language used for describing the
            presentation of a document written in HTML.
          </span>
        </p>
        <ProjectsButton urls='https://github.com/Deobap73/Final-project' />
      </div>
      {/* <div className='frame-div' /> */}
    </div>
  );
};

export default ProjectsTheFirstProject;
