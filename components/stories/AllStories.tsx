import { client } from '@/lib/sanity';
import { INewsList, ITag } from '@/lib/types';
import AllStoriesClient from './AllStoriesClient';

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'stories'] | order(date desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      date,
      "tags": tags[]->{ _id, name, "slug": slug.current }
    }`;
  const data = await client.fetch(query);
  return data;
}

async function getAllTags() {
  try {
    const query = `
      *[_type == 'tag'] | order(name asc) {
        _id,
        name,
        "slug": slug.current
      }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

export default async function AllStories() {
  const tags: ITag[] = await getAllTags();
  const stories: INewsList[] = await getData();

  return <AllStoriesClient tags={tags} stories={stories} />;
}
