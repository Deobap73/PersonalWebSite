// src/components/AboutMeResumeBox.jsx

import TimeLine from './TimeLine';
import LineOfTime from './LineOfTime';
import LanguageBoxLeft from './LanguageBoxLeft';
import LanguageBoxRight from './LanguageBoxRight';
import EducationBoxRight from './EducationBoxRight';
import JobBoxRight from './JobBoxRight';
import JobBoxLeft from './JobBoxLeft';
import './AboutMeResumeBox.scss';

const AboutMeResumeBox = () => {
  return (
    <div className='aboutMeResumeBox'>
      <div className='TimeLine'>
        <TimeLine type='briefcase' />
        <LineOfTime />
      </div>
      <div className='work-experience'>Work Experience</div>
      <div className='JobBoxLeft1'>
        <JobBoxLeft
          title='Truck Driver - Reichhart Logistik GmbH (Germany)'
          date='June 2019 - November 2022'
          responsibilities={[
            'Responsible for transporting goods.',
            'Responsible for loading and unloading safely',
          ]}
        />
      </div>
      <div className='JobBoxRight'>
        <JobBoxRight />
      </div>
      <div className='JobBoxLeft2'>
        <JobBoxLeft
          title='Management Advisor - Araujo Mota & Pereira, Lda (Portugal)'
          date='June 2010 - December 2018'
          responsibilities={[
            'Led company acquisition and merger negotiations and change management initiatives to ensure smooth transitions during process',
            'Led the negotiation and creation of commercial strategy between the company and associated business companies',
            'Led the distribution of tasks in order to be more efficient for employees and the end client',
          ]}
        />
      </div>
      <div className='TimeLine1'>
        <TimeLine type='graduation' />
      </div>
      <div className='education'>Education</div>
      <div className='EducationBoxRight'>
        <EducationBoxRight />
      </div>
      <div className='TimeLine2'>
        <TimeLine type='comments' />
      </div>
      <div className='language'>Language</div>
      <div className='LanguageBoxLeft1'>
        <LanguageBoxLeft
          french='Portuguese'
          a2Level='Native'
          a2LevelMargin='unset'
          a2LevelFontWeight='bold'
        />
      </div>
      <div className='LanguageBoxRight1'>
        <LanguageBoxRight german='English' a2Level='C1 level' />
      </div>
      <div className='LanguageBoxLeft2'>
        <LanguageBoxLeft
          french='Spanish'
          a2Level='B2 level'
          a2LevelMargin='0'
          a2LevelFontWeight='700'
        />
      </div>
      <div className='LanguageBoxRight2'>
        <LanguageBoxRight german='German' a2Level='A2 level' />
      </div>
      <div className='LanguageBoxLef3'>
        <LanguageBoxLeft french='French' a2Level='A2 level' />
      </div>
    </div>
  );
};

export default AboutMeResumeBox;
