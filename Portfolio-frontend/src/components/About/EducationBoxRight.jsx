// src/components/EducationBoxRight.jsx

import './EducationBoxRight.scss';

const EducationBoxRight = () => {
  return (
    <div className='educationBoxRight'>
      <div className='educationBoxRight-child' />
      <div className='full-stack-web-developer-forma-parent'>
        <h2 className='full-stack-web'>
          Full Stack Web Developer Formation - DCI Digital Career Institute GmbH
          (Germany)
        </h2>
        <h3 className='january-2023-present'>January 2023 - February 2024</h3>
        <ul className='currently-enrolled-in-full-sta-wrapper'>
          <b className='currently-enrolled-in-container'>
            <ul className='currently-enrolled-in-full-sta'>
              <li className='currently-enrolled-in'>
                Currently enrolled in Full Stack web development studies.
              </li>
            </ul>
            <p className='blank-line8'>&nbsp;</p>
            <ul className='currently-enrolled-in-full-sta'>
              <li className='currently-enrolled-in'>
                Developed web development skills with a focus on JavaScript,
                React, and NodeJS
              </li>
            </ul>
            <p className='blank-line8'>&nbsp;</p>
            <ul className='currently-enrolled-in-full-sta'>
              <li className='currently-enrolled-in'>
                Acquired skills in creativity, planning, strategy, layout, and
                grid design
              </li>
            </ul>
            <p className='blank-line8'>&nbsp;</p>
            <ul className='currently-enrolled-in-full-sta'>
              <li>
                Proficient in Figma, Photoshop, and intermediate level in
                Lightroom
              </li>
            </ul>
          </b>
        </ul>
      </div>
    </div>
  );
};

export default EducationBoxRight;
