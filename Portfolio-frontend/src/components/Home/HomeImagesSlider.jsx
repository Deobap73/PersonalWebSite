// src/components/HomeImagesSlider.jsx
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './HomeImagesSlider.scss';

export default function HomeImagesSlider({ slides, parentWidth }) {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, slides.length]);

  return (
    <div className='slider'>
      <div className='slides-container-overflow'>
        <div
          className='slides-container'
          style={{
            width: `${parentWidth * slides.length}px`,
            transform: `translateX(-${currentIndex * parentWidth}px)`,
            transition: 'transform 2s ease-in-out',
          }}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className='slide'
              style={{
                backgroundImage: `url(${slide})`,
                width: `${parentWidth}px`, // The slide width is set here
              }}
              onClick={() => goToSlide(slideIndex)}></div>
          ))}
        </div>
      </div>
      <div className='dots-container'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? 'dot-active' : ''}`}
            onClick={() => goToSlide(slideIndex)}></div>
        ))}
      </div>
    </div>
  );
}

HomeImagesSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  parentWidth: PropTypes.number.isRequired, // Now parent Width is required
};
