// src/components/JobBoxRight.jsx

import './JobBoxRight.scss';

const JobBoxRight = () => {
  return (
    <div className='jobBoxRight'>
      <div className='jobBoxRight-child' />
      <div className='management-advisor-and-response-parent'>
        <h2 className='management-advisor-and'>{`Management Advisor and Responsible for General Regime Data Protection - Araujo Mota & Pereira, Lda (Portugal)`}</h2>
        <h3 className='january-2018-'>January 2018 - February 2019</h3>
        <ul className='client-focus-and-strong-commit-wrapper'>
          <b className='client-focus-and-container'>
            <ul className='client-focus-and-strong-commit'>
              <li className='client-focus-and'>
                Client Focus and strong commitment to understanding and meeting
                our clients data protection needs.
              </li>
            </ul>
            <p className='blank-line11'>&nbsp;</p>
            <ul className='client-focus-and-strong-commit'>
              <li>
                Provide leadership and guidance on data protection efforts
                within the organization
              </li>
            </ul>
          </b>
        </ul>
      </div>
    </div>
  );
};

export default JobBoxRight;
