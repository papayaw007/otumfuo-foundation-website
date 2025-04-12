import React from 'react';
import SectionHeading from '../shared/heading';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { cardData } from '@/lib/data';

function MissionVision() {
  return (
    <section className="mt-24">
      <SectionHeading title="our mission and vision" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="bg-primary rounded-3xl flex flex-col pb-14">
            <CardHeader className="h-10 lg:h-14 flex items-center">
              <Image
                src={card.image}
                alt={`${card.title} Icon`}
                className="w-12 lg:w-12"
              />
            </CardHeader>
            <CardContent className="text-white flex-1">
              <span className="capitalize text-xl md:text-2xl font-bold block">
                {card.title}
              </span>
              <p className="mt-6 lg:text-xl">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default MissionVision;
