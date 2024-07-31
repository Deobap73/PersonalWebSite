// src/components/LanguageBoxLRight.jsx

import { useMemo } from 'react';

import PropTypes from 'prop-types';
import './LanguageBoxRight.scss';

const LanguageBoxRight = ({ languageBoxRightTop, german, a2Level }) => {
  const languageBoxRightStyle = useMemo(() => {
    return {
      top: languageBoxRightTop,
    };
  }, [languageBoxRightTop]);

  return (
    <div className='languageBoxRight' style={languageBoxRightStyle}>
      <div className='languageBoxRight-child' />
      <div className='german-parent'>
        <h2 className='german'>{german}</h2>
        <h3 className='a2-level1'>{a2Level}</h3>
      </div>
    </div>
  );
};

LanguageBoxRight.propTypes = {
  languageBoxRightTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  german: PropTypes.string.isRequired,
  a2Level: PropTypes.string.isRequired,
};

export default LanguageBoxRight;
