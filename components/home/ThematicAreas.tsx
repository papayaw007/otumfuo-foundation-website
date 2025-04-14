import React from 'react';
import { thematicData } from '@/lib/data';
import ThematicCard from '../shared/ThematicCard';

function ThematicAreas() {
  return (
    <section className="mt-36">
      <div>
        <p className="text-4xl font-bold py-5">Thematic Areas</p>
        <p>
          The foundation is working under five broad thematic areas,
          which are in line with the achievement of aspects of
          Sustainable Development Goals (SDGs), GPRS II and NEPAD
          goals respectively. These development agendas have the
          ultimate aim of empowering and building the capabilities of
          the people to sustain their livelihoods and also enhance
          their well-being.
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 mt-5">
        {thematicData.map((card) => (
          <ThematicCard
            key={card.id}
            id={String(card.id)}
            title={card.title}
            description={card.description}
            imgUrl={card.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ThematicAreas;
