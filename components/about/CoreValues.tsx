import React from 'react';
import SectionHeading from '../shared/heading';
import Image from 'next/image';
import { coreValues } from '@/lib/data';

function CoreValues() {
  return (
    <section>
      <SectionHeading title="our core values" />
      <p className="text-base lg:text-xl mt-3 lg:mt-6">
        Succeeding the Asante golden stool as the 16th Asantehene, the
        goal of Otumfuo Osei Tutu II has been to guard the interest of
        Asanteman, in growth and development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 mt-6">
        {coreValues.map(({ src, label }, index) => (
          <div
            key={index}
            className="flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8 space-x-4 shadow-xl rounded-xl">
            <Image src={src} alt={`${label} Icon`} />
            <span className="text-lg sm:text-xl lg:text-2xl font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
