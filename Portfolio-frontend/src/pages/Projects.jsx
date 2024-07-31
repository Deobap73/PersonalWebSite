// src/pages/Projects.jsx

import { Helmet } from 'react-helmet';
import ProjectsMain from '../components/Projects/ProjectsMain';
import ProjectsTheProjects from '../components/Projects/ProjectsTheProjects';
import Footer from '../components/Footer/Footer';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='projects'>
      <Helmet>
        <title>Projects - Deolindo Baptista</title>
        <meta
          name='description'
          content='Explore some of the projects developed by Deolindo Baptista, a Junior Full Stack Web Developer. View examples of web applications, websites, and other coding projects.'
        />
        <meta
          name='keywords'
          content='Deolindo Baptista, portfolio, web development, junior web developer, web developer portfolio, web development projects, web development skills, blog, web development blog, html, css, scss, JavaScript, nodejs, figma, photoshop, git, github, mern, react, mongodb, coding, programming'
        />

        <meta property='og:title' content='Projects - Deolindo Baptista' />
        <meta
          property='og:description'
          content='Explore some of the projects developed by Deolindo Baptista, a Junior Full Stack Web Developer. View examples of web applications, websites, and other coding projects.'
        />
        <meta
          property='og:url'
          content='https://deolindobaptista.com/projects'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <header className='projectspresentationname'>
        <p className='projectsSentence'>
          <span className='take-a-look'>Take a look at some of </span>
          <span className='my-projects'>My projects</span>
        </p>
      </header>
      <ProjectsMain />
      <ProjectsTheProjects />
      <Footer />
    </div>
  );
};

export default Projects;
