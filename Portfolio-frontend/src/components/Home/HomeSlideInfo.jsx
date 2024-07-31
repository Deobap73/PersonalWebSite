// src/components/HomeSlideInfo.jsx
import { useState, useEffect } from 'react';
import images from '../../assets/imageIndex';
import HomeImagesSlider from './HomeImagesSlider';
import './HomeSlideInfo.scss';

export default function HomeSlideInfo() {
  const [containerStyles, setContainerStyles] = useState({
    width: '746px',
    height: '386px',
    margin: '1.25rem auto',
  });

  const {
    ImageGeneratorHome,
    ProjectAroundTheWorld,
    AthleteProfile,
    Project1Home,
  } = images;

  const slides = [
    ImageGeneratorHome,
    ProjectAroundTheWorld,
    AthleteProfile,
    Project1Home,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slides every 5 seconds (5000 milliseconds)

    // Clears the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [slides.length]); // Runs only once, when component is mounted

  // Function to return information corresponding to the current slide
  const getSlideInfo = (index) => {
    switch (index) {
      case 0:
        return {
          sentence: 'The final project',
          title: 'ImageAIGenerator',
          description:
            'A project that allows users to generate images from text descriptions with AI-powered image generation using DALL-E.',
          tools: [
            { name: 'React', img: images.react },
            { name: 'NodeJS', img: images.node },
            { name: 'MongoDB', img: images.MongoDB },
            { name: 'Figma', img: images.figma },
          ],
        };
      case 1:
        return {
          sentence: 'Work in Team',
          title: 'Project Around The World',
          description:
            'Team project. On this site we tell through images our experience which enriches our lives, about this wonderful planet we live.',
          tools: [
            { name: 'React', img: images.react },
            { name: 'Scss', img: images.Sass },
            { name: 'Figma', img: images.figma },
            { name: 'Photoshop', img: images.photoshop },
          ],
        };
      case 2:
        return {
          sentence: 'In the Sport',
          title: 'Athlete Portfolio...  ',
          description:
            'This project showed me how much I like SCSS as a basis for style. An interesting project and once again focused on exploring what can be done with SCSS and not so much on the style itself',
          tools: [
            { name: 'HTML', img: images.html5 },
            { name: 'Scss', img: images.Sass },
            { name: 'Figma', img: images.figma },
          ],
        };
      case 3:
        return {
          sentence: 'The beginning',
          title: 'The project DBPoxy',
          description:
            'This was the first project was created to demonstrate the knowledge gained in the orientation course.',
          tools: [
            { name: 'HTML', img: images.html5 },
            { name: 'Css', img: images.css },
          ],
        };

      default:
        return {};
    }
  };

  const currentSlideInfo = getSlideInfo(currentIndex);

  // State to control the dynamic width of slides
  const [parentWidth, setParentWidth] = useState(746);
  useEffect(() => {
    const resizeListener = () => {
      if (window.matchMedia('(max-width: 450px)').matches) {
        setContainerStyles({
          width: '288px',
          height: '147.6px',
          margin: '1.25rem auto',
        });
        setParentWidth(288); // Sets the dynamic width for 320px
      } else if (window.matchMedia('(max-width: 750px)').matches) {
        setContainerStyles({
          width: '320px',
          height: '164px',
          margin: '1.25rem auto',
        });
        setParentWidth(320); // Sets the dynamic width for 450px
      } else if (window.matchMedia('(max-width: 1050px)').matches) {
        setContainerStyles({
          width: '480px',
          height: '246px',
          margin: '1.25rem auto',
        });
        setParentWidth(480); // Sets the dynamic width for 480px
      } else if (window.matchMedia('(max-width: 1200px)').matches) {
        setContainerStyles({
          width: '693.693px',
          height: '357.5187px',
          margin: '1.25rem auto',
        });
        setParentWidth(693.693); // Sets the dynamic width for 520px
      } else {
        setContainerStyles({
          width: '746px',
          height: '386px',
          margin: '1.25rem auto',
        });
        setParentWidth(746); // Sets the default dynamic width of 746px
      }
    };

    // Adding an initial resize listener
    window.addEventListener('resize', resizeListener);

    // Clear resize listener when component is unmounted
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <>
      <section className='slideContainer'>
        <div className='projectTitle'>
          <div className='verticalLine'>
            <hr className='line' />
          </div>
          <h3>{currentSlideInfo.sentence}</h3>
          <h2>{currentSlideInfo.title}</h2>
        </div>
        <div style={containerStyles}>
          <HomeImagesSlider slides={slides} parentWidth={parentWidth} />
        </div>

        <div className='projectTools'>
          <p>{currentSlideInfo.description}</p>
          {currentSlideInfo.tools.map((tool, index) => (
            <h3 className='tools' key={index}>
              <img src={tool.img} alt={tool.name} /> {tool.name}
            </h3>
          ))}
          <div className='verticalLine'>
            <hr className='line' />
          </div>
        </div>
      </section>
    </>
  );
}
