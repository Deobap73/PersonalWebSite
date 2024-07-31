// src/components/jobBoxLeft.jsx

import PropTypes from 'prop-types';
import './JobBoxLeft.scss';

const jobBoxLeft = ({ className, title, date, responsibilities }) => {
  return (
    <div className={`jobBoxLeft ${className}`}>
      <div className='jobBoxLeft-child' />
      <div className='jobBoxLeftContainer'>
        <h2 className='jobBoxLeftTitle'>{title}</h2>
        <h3 className='jobBoxLeftDate'>{date}</h3>
        <ul className='jobBoxLeftListContainer'>
          <b className='jobBoxLeftListContainerTitle'>
            <ul className='jobBoxLeftList'>
              {responsibilities.map((item, index) => (
                <li key={index} className='jobBoxLeftListDiscrimination'>
                  {item}
                </li>
              ))}
            </ul>
          </b>
        </ul>
      </div>
    </div>
  );
};

jobBoxLeft.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default jobBoxLeft;
