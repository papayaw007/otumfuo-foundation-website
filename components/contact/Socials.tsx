import React from 'react';
import SectionHeading from '../shared/heading';
import Image from 'next/image';
import { socials } from '@/lib/data';
import Link from 'next/link';

function Socials() {
  return (
    <section>
      <SectionHeading title="reach us on social media" />
      <div className="grid grid-cols-5 place-content-center place-items-center bg-primary py-10 rounded-3xl mt-6">
        {socials.map((s) => (
          <Link key={s.name} href={s.url}>
            <Image
              src={s.img}
              alt={`${s.name} Logo`}
              className="w-16"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Socials;
