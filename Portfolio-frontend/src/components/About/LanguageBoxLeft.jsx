// src/components/LanguageBoxLeft.jsx

import { useMemo } from 'react';
import PropTypes from 'prop-types';
import './LanguageBoxLeft.scss';

const LanguageBoxLeft = ({
  languageBoxLeftTop,
  languageBoxLeftLeft,
  frameDivWidth,
  french,
  a2Level,
  a2LevelMargin,
  a2LevelFontWeight,
}) => {
  const languageBoxLeftStyle = useMemo(() => {
    return {
      top: languageBoxLeftTop,
      left: languageBoxLeftLeft,
    };
  }, [languageBoxLeftTop, languageBoxLeftLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const a2LevelStyle = useMemo(() => {
    return {
      margin: a2LevelMargin,
      fontWeight: a2LevelFontWeight,
    };
  }, [a2LevelMargin, a2LevelFontWeight]);

  return (
    <div className='languageBoxLeft' style={languageBoxLeftStyle}>
      <div className='french-parent' style={frameDivStyle}>
        <h2 className='french'>{french}</h2>
        <h3 className='a2-level' style={a2LevelStyle}>
          {a2Level}
        </h3>
      </div>
      <div className='languageBoxLeft-child' />
    </div>
  );
};

LanguageBoxLeft.propTypes = {
  languageBoxLeftTop: PropTypes.string.isRequired,
  languageBoxLeftLeft: PropTypes.string.isRequired,
  frameDivWidth: PropTypes.string.isRequired,
  french: PropTypes.string.isRequired,
  a2Level: PropTypes.string.isRequired,
  a2LevelMargin: PropTypes.string.isRequired,
  a2LevelFontWeight: PropTypes.string.isRequired,
};

export default LanguageBoxLeft;
