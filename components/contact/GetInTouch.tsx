import React from 'react';
import SectionHeading from '../shared/heading';
import { Card, CardContent, CardHeader } from '../ui/card';

import { contactDetails } from '@/lib/data';

function GetInTouch() {
  return (
    <section className="my-16 md:my-24 lg:my-36 px-4 sm:px-6 lg:px-8">
  <SectionHeading title="get in touch" />
  <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {contactDetails.map((detail) => (
      <Card
        key={detail.number}
        className="bg-neutral-50 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col pb-8 md:pb-10 lg:pb-14 transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <CardHeader className="h-8 md:h-10 lg:h-14 flex items-center">
          <div className="bg-primary py-1 md:py-2 px-3 md:px-4 rounded-md lg:rounded-lg">
            <span className="text-lg md:text-xl lg:text-2xl text-white">
              {detail.number}
            </span>
          </div>
        </CardHeader>
        <CardContent className="text-foreground flex-1">
          <span className="capitalize text-lg sm:text-xl md:text-2xl font-bold block">
            {detail.title}
          </span>
          <p className="mt-3 md:mt-4 lg:mt-6 text-sm sm:text-base lg:text-xl">{detail.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
  );
}

export default GetInTouch;
