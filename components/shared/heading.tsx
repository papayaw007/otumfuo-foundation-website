import React from 'react';

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="font-bold text-2xl capitalize lg:text-4xl">
      {title}
    </h2>
  );
}

export default SectionHeading;
