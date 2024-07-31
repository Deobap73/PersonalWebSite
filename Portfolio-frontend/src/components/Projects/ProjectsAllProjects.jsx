// src/components/ProjectsAllProjects.jsx

import ProjectsTheFirstProject from './ProjectsTheFirstProject';
import ProjectsTheOthersProjects from './ProjectsTheOthersProjects';
import './ProjectsAllProjects.scss';

const ProjectsAllProjects = () => {
  return (
    <div className='projectsallprojects'>
      <ProjectsTheFirstProject />
      <ProjectsTheOthersProjects />
    </div>
  );
};

export default ProjectsAllProjects;
