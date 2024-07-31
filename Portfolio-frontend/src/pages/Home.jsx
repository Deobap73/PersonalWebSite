// src/pages/Home.jsx

import { Helmet } from 'react-helmet';
import HomeMain from '../components/Home/HomeMain';
import HomeTheVocation from '../components/Home/HomeTheVocation';
import HomeEducationContainer from '../components/Home/HomeEducationContainer';
import HomeProjectsContainer from '../components/Home/HomeProjectsContainer';
import HomeContactContainer from '../components/Home/HomeContactContainer';
import Footer from '../components/Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <title>Home - Deolindo Baptista</title>
        <meta
          name='description'
          content="Welcome to Deolindo Baptista's portfolio. Explore my web development projects, skills, and blog articles on the latest in web development."
        />
        <meta
          name='keywords'
          content='Deolindo Baptista, portfolio, web development, junior web developer, web developer portfolio, web development projects, web development skills, blog, web development blog, html, css, scss, JavaScript, nodejs, figma, photoshop, git, github, mern, react, mongodb, coding, programming'
        />
        <meta property='og:title' content='Home - Deolindo Baptista' />
        <meta
          property='og:description'
          content="Explore Deolindo Baptista's web development projects, skills, and blog articles."
        />
        <meta property='og:url' content='https://deolindobaptista.com/' />
        <meta property='og:type' content='website' />
      </Helmet>
      <header
        className='homePresentationName'
        data-scroll-to='homePresentationName'>
        <h1 className='deolindo-baptista'>Deolindo Baptista</h1>
      </header>
      <HomeMain />
      <HomeTheVocation />
      <HomeEducationContainer />
      <HomeProjectsContainer />
      <HomeContactContainer />
      <Footer />
    </div>
  );
};

export default Home;
