/* eslint-disable @next/next/no-img-element */

import React from 'react';

interface Props {
  image: string;
  name: string;
  role: string;
}

function BoardCard({ image, name, role }: Props) {
  return (
    <div className="flex flex-col">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="aspect-square object-cover object-top w-full"
        />
      </div>
      <div className="flex items-center justify-center mt-3">
        <span className="font-bold text-lg md:text-xl">
          {name},{' '}
          <span className="text-lg md:text-xl font-light">
            {role}
          </span>
        </span>
      </div>
    </div>
  );
}

export default BoardCard;
