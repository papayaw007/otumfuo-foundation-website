import { client, urlFor } from '@/lib/sanity';
import { INewsArticle } from '@/lib/types';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: INewsArticle = await getData(id);

  return {
    title: data?.title,
    description: data?.smallDescription,
  };
}

async function getData(id: string) {
  const query = `
    *[_type == "stories" && slug.current == '${id}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: INewsArticle = await getData(id);

  return (
    <div className="my-36">
      <h1>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data?.title}
        </span>
      </h1>

      <div className="flex justify-center">
        <Image
          src={urlFor(data?.titleImage)?.url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded-lg mt-8 border"
        />
      </div>

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data?.content} />
      </div>
    </div>
  );
}
