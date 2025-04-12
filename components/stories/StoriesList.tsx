import React from 'react';

import { client } from '@/lib/sanity';
import { INewsList } from '@/lib/types';
import StoryCard from '../shared/StoryCard';
import Heading from '../shared/heading';

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'stories'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}
async function StoriesList() {
  const data: INewsList[] = await getData();
  return (
    <section>
      <Heading title="Recent Stories" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 md:gap-8">
        {data.map((n) => (
          <StoryCard
            key={n.currentSlug}
            id={n.currentSlug}
            title={n.title}
            description={n.smallDescription}
            imgUrl={n.titleImage}
          />
        ))}
      </div>
    </section>
  );
}

export default StoriesList;
