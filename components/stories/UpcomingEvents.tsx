import React from 'react';
import { client } from '@/lib/sanity';
import { INewsList } from '@/lib/types';
import StoryCard from '../shared/StoryCard';
import Heading from '../shared/heading';

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'stories' && upcoming == true] | order(date asc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    date
  }`;

  const data = await client.fetch(query);
  return data;
}

async function UpcomingEvents() {
  const data: INewsList[] = await getData();

  if (data.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <Heading title="Upcoming Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 md:gap-8">
        {data.map((event) => (
          <StoryCard
            key={event.currentSlug}
            id={event.currentSlug}
            title={event.title}
            description={event.smallDescription}
            imgUrl={event.titleImage}
            date={event.date}
          />
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
