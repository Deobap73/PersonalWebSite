// src/components/PlanningCard.jsx
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import './PlanningCard.scss';

const PlanningCard = ({
  designId,
  processType,
  designDescriptionText,
  propPadding,
  propWidth,
}) => {
  const homeVocationBoxStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className='homeVocationBox' style={homeVocationBoxStyle}>
      <div className='vocationBoxChild'>
        <img
          className='vector-icon'
          alt=''
          src={designId}
          style={vectorIconStyle}
        />
        <h2 className='planning'>{processType}</h2>
        <p className='in-the-world'>{designDescriptionText}</p>
      </div>
    </div>
  );
};

// Define the PropTypes for the PlanningCard component
PlanningCard.propTypes = {
  designId: PropTypes.string.isRequired,
  processType: PropTypes.string.isRequired, // Set processType to required
  designDescriptionText: PropTypes.string.isRequired,
  propPadding: PropTypes.string,
  propWidth: PropTypes.string,
};

export default PlanningCard;
