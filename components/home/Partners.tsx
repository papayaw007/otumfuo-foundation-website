'use client';
import { partnersData } from '@/lib/data';
import React from 'react';
import Image from 'next/image';

function Partners() {
  return (
    <section className="my-36">
      <p className="text-4xl font-bold">Partners</p>
      <div className="overflow-hidden bg-white py-24">
        <div className="flex animate-scroll-left gap-20 w-max">
          {[...partnersData, ...partnersData].map((data, index) => (
            <div
              key={data.id + '-' + index}
              className="shrink-0 px-8">
              <Image
                src={data.image}
                alt={data.alt}
                width={120}
                height={48}
                className="opacity-90 hover:opacity-100 transition duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
