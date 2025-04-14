import React from 'react';
import SectionHeading from '../shared/heading';
import Image from 'next/image';
import { socials } from '@/lib/data';
import Link from 'next/link';

function Socials() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-10 md:mb-16">
  <SectionHeading title="reach us on social media" />
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-4 place-content-center place-items-center bg-primary py-6 sm:py-8 lg:py-10 rounded-xl sm:rounded-2xl lg:rounded-3xl mt-4 sm:mt-5 lg:mt-6">
    {socials.map((s) => (
      <Link key={s.name} href={s.url} className="mb-2 sm:mb-0 transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src={s.img}
          alt={`${s.name} Logo`}
          className="w-10 sm:w-12 md:w-14 lg:w-16"
        />
      </Link>
    ))}
  </div>
</section>
  );
}

export default Socials;
