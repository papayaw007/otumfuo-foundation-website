import React from 'react';
import SectionHeading from '../shared/heading';
import { Card, CardContent, CardHeader } from '../ui/card';

import { contactDetails } from '@/lib/data';

function GetInTouch() {
  return (
    <section className="my-36">
      <SectionHeading title="get in touch" />
      <div className="mt-6 grid grid-cols-3 gap-8">
        {contactDetails.map((detail) => (
          <Card
            key={detail.number}
            className="bg-neutral-50 rounded-3xl flex flex-col pb-14">
            <CardHeader className="h-10 lg:h-14 flex items-center">
              <div className="bg-primary py-2 px-4 rounded-lg">
                <span className="text-2xl text-white">
                  {detail.number}
                </span>
              </div>
            </CardHeader>
            <CardContent className="text-foreground flex-1">
              <span className="capitalize text-xl md:text-2xl font-bold block">
                {detail.title}
              </span>
              <p className="mt-6 lg:text-xl">{detail.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default GetInTouch;
