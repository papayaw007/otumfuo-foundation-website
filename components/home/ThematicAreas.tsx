import React from 'react';
import { thematicData } from '@/lib/data';
import ThematicCard from '../shared/ThematicCard';

function ThematicAreas() {
  return <div>
    <div>
      <p className='text-4xl font-bold py-5'>Thematic Areas</p>
      <p>The foundation is working under five broad thematic areas, which are in line with the achievement of aspects of Sustainable Development Goals (SDGs), GPRS II and NEPAD goals respectively. These development agendas have the ultimate aim of empowering and building the capabilities of the people to sustain their livelihoods and also enhance their well-being.</p>
    </div>
    <div className='grid  grid-cols-1 md:grid-cols-3 gap-10 mt-5 mb-15'>
      { thematicData.map((card)=>(
        <ThematicCard
                    key={card.id}
                    id={String(card.id)}
                    title={card.title}
                    description={card.description}
                    imgUrl={card.image}
                   
                  />
      ))
      }
    </div>
    <div className='mb-20 flex flex-wrap justify-center items-center p-6 md:p-12 lg:p-20 bg-primary text-white rounded-4xl gap-6 md:gap-10 lg:gap-20'>
       <p className='flex justify-center items-center text-center text-4xl'>We Are Harnessing The Power Of Innovation To <br /> Accelerate Development And Transformation In Africa</p>
      </div>
  </div>;
}

export default ThematicAreas;
