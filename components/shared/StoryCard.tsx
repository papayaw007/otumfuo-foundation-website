import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { formatDate } from '@/lib/utils';

type Tag = {
  _id: string;
  name: string;
  slug: string;
};

interface StoryCardProps {
  id: string;
  title: string;
  description: string;
  imgUrl: any;
  date?: string;
  tags?: Tag[];
}

export default function StoryCard({
  id,
  title,
  description,
  imgUrl,
  date,
  tags,
}: StoryCardProps) {
  return (
    <Link href={`/stories/${id}`}>
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          {imgUrl ? (
            <Image
              src={urlFor(imgUrl).url()}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-gray-200 h-full w-full flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>
        <div className="p-4 bg-gray-50">
          {date && (
            <p className="text-sm text-gray-500 mb-2">
              {formatDate(date)}
            </p>
          )}
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3 mb-3">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag._id}
                  className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigating to the story page
                  }}>
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
