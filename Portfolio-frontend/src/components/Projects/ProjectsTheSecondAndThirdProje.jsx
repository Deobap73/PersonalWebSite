// src/components/ProjectsTheSecondAndThirdProje.jsx

import ProjectsButton from './ProjectsButton';
import './ProjectsTheSecondAndThirdProje.scss';

const ProjectsTheSecondAndThirdProje = () => {
  return (
    <div className='projectsTheSecondProjectDescription-parent'>
      <div className='projectsTheSecondProjectDescription'>
        <h2 className='the-first-portfolio'>The first portfolio</h2>
        <p className='this-project-was-container'>
          <span className='this-project-was'>{`This project was the first created during the Web Development course. `}</span>
          <span className='this-project-was'>&nbsp;</span>
          <span className='this-project-was'>
            A project using the same tools but focusing more on experimenting
            with what was learned with CSS.
          </span>
          <span className='this-project-was'>&nbsp;</span>
          <span className='this-project-was'>
            Not too focused on style but more on the different possibilities
            that CSS provides.
          </span>
        </p>
        <ProjectsButton urls='https://github.com/Deobap73/web-development-journey' />
      </div>
      <div className='projectsTheSecondProjectDescription'>
        <h2 className='the-first-portfolio'>The athlete`s portfolio</h2>
        <p className='this-project-was-container'>
          <span className='this-project-was'>{`Another project to deepen your skills with HTML, CSS but with experience with SCSS. `}</span>
          <span className='this-project-was'>&nbsp;</span>
          <span className='this-project-was'>{`This project showed me how much I like SCSS as a basis for style. `}</span>
          <span className='this-project-was'>&nbsp;</span>
          <span className='this-project-was'>
            An interesting project and once again focused on exploring what can
            be done with SCSS and not so much on the style itself.
          </span>
        </p>
        <ProjectsButton urls='https://github.com/Deobap73/Portfolio-Nadia-v1' />
      </div>
    </div>
  );
};

export default ProjectsTheSecondAndThirdProje;
