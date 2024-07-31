// src/pages/AboutMe.jsx

import { Helmet } from 'react-helmet';
import AboutMeMain from '../components/About/AboutMeMain';
import AboutMeSkillsContainer from '../components/About/AboutMeSkillsContainer';
import Footer from '../components/Footer/Footer';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <Helmet>
        <title>About Me - Deolindo Baptista</title>
        <meta
          name='description'
          content='Learn more about Deolindo Baptista, a Junior Full Stack Web Developer with a passion for building exceptional web applications.'
        />
        <meta
          name='keywords'
          content='Deolindo Baptista, portfolio, web development, junior web developer, web developer portfolio, web development projects, web development skills, blog, web development blog, html, css, scss, JavaScript, nodejs, figma, photoshop, git, github, mern, react, mongodb, coding, programming'
        />
        <meta property='og:title' content='About Me - Deolindo Baptista' />
        <meta
          property='og:description'
          content='Learn more about Deolindo Baptista, a Junior Full Stack Web Developer with a passion for building exceptional web applications.'
        />
        <meta
          property='og:url'
          content='https://deolindobaptista.com/about-me'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <header
        className='aboutMePresentationName'
        data-scroll-to='aboutMePresentationName'>
        <h1 className='deolindo-baptista1'>
          <span>{`Hi, I am `}</span>
          <span className='deolindo-baptista2'>Deolindo Baptista</span>
        </h1>
        <p className='as-a-junior'>
          My journey as a Junior Full Stack Web Developer is marked by
          resilience, constant learning, and an unwavering passion for building
          exceptional web applications.
        </p>
      </header>
      <AboutMeMain />
      <AboutMeSkillsContainer />
      <Footer />
    </div>
  );
};
export default AboutMe;
