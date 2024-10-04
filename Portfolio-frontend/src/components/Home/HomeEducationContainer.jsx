// src/components/HomeEducationContainer.jsx

import DeoButton from '../Buttons/DeoButton';
import images from '../../assets/imageIndex';
import './HomeEducationContainer.scss';

const HomeEducationContainer = () => {
  return (
    <section className='homeEducationContainer'>
      <DeoButton />
      <section className='homeEducationContainerBox'>
        <div className='verticalLine'>
          <hr className='line' />
        </div>
        <div className='homeEducationsLogan'>
          <div className='educationsLoganTitle'>
            <h2 className='my-education'>My Education</h2>
          </div>
          <p className='my-training-in-container'>
            <span className='my-training-in'>
              My training at the Digital Career Institute (DCI) was a transformative journey that
              solidified my passion for Web Development and opened new doors into Project
              Management.{' '}
            </span>
            <span className='my-training-in'>&nbsp;</span>
            <span className='my-training-in'>
              At DCI, I honed my skills in programming languages, responsive design, and
              collaboration, gaining hands-on experience with modern technologies like the MERN
              stack. I developed the ability to tackle complex challenges and devise innovative
              solutions, working closely with teams in a dynamic, fast-paced environment.{' '}
            </span>
            <span className='my-training-in'>&nbsp;</span>
            <span className='my-training-in'>
              As a project manager I have developed skills in communication, collaboration and time
              management with experience in Agile methodologies, currently seeking a project
              management certificate from Google.
            </span>
            <span className='my-training-in'>&nbsp;</span>
            <span className='my-training-in'>
              I look forward to applying these skills in web development and project leadership
              roles where I can contribute to innovative, user-centered projects while managing
              teams effectively to drive success.
            </span>
          </p>
        </div>
        <div className='homeEducationBox'>
          <img
            className='screenshot-diploma'
            alt='Foundations Of Project Management Certificate from Google'
            src={images.FoundationsOfProjectManagementCertificate}
          />
          <img
            className='screenshot-diploma'
            alt='Project Initiation: Starting a Successful Project Certificate from Google'
            src={images.ProjectInitiationStartingSuccessfulProjectCertificate}
          />
          <img
            className='screenshot-diploma'
            alt='Project Planning: Putting It All Together Certificate from Google'
            src={images.ProjectPlanningPuttingItAllTogetherCertificate}
          />
          <img
            className='screenshot-diploma'
            alt='Diploma JavaScript'
            src={images.DiplomaJavaScript}
          />
          <img className='screenshot-diploma' alt='Diploma of React' src={images.DiplomaReact} />
          <img
            className='screenshot-diploma'
            alt='Diploma FullStack'
            src={images.DiplomaFullStack}
          />
        </div>
      </section>
    </section>
  );
};

export default HomeEducationContainer;
