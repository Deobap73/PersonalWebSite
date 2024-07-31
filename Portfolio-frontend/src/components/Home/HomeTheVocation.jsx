// src/components/HomeTheVocation.jsx

import DeoButton from '../Buttons/DeoButton';
import PlanningCard from './PlanningCard';
import images from '../../assets/imageIndex';
import './HomeTheVocation.scss';

const HomeTheVocation = () => {
  return (
    <section className='homeTheVocation'>
      <DeoButton />
      <section className='homeVocationContainer'>
        <section className='homeVocationContainerPresentation'>
          <div className='verticalLine'>
            <hr className='line' />
          </div>
          <section className='homeVocationsLogan'>
            <section className='homeVocationsLoganTitle'>
              <h2 className='the-vocation'>The vocation</h2>
            </section>
            <p className='where-every-line'>
              Where every line of code comes to life and shapes the online
              experience.
            </p>
          </section>
        </section>
        <section className='homeVocationPresentations'>
          <PlanningCard
            designId={images.Planning}
            processType='Planning'
            designDescriptionText='In the world of design, meticulous planning is the compass that guides creativity towards its true destination'
          />
          <PlanningCard
            designId={images.Design}
            processType='Design'
            designDescriptionText="Design is not just about aesthetics; it's the art of crafting experiences that resonate with the soul."
          />
          <PlanningCard
            designId={images.Execution}
            processType='Execution'
            designDescriptionText='The true magic of a vision lies in the execution, where ideas take flight and become reality.'
          />
        </section>
      </section>
    </section>
  );
};

export default HomeTheVocation;
