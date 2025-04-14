'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  showButtons?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonUrl?: string;
}

function Hero({
  title,
  description,
  imageSrc,
  imageAlt = 'Hero Image',
  showButtons = true,
  primaryButtonText = 'Donate Now',
  secondaryButtonText = 'Get In Touch',
  primaryButtonUrl = '/donate',
  secondaryButtonUrl = '/contact',
}: HeroProps) {
  const HeroContent = () => {
    const router = useRouter();
    return (
      <div className="space-y-6 w-full md:w-1/2">
        <h1 className="capitalize text-3xl lg:text-5xl font-bold">
          {title}
        </h1>
        <p className="text-base lg:text-xl">{description}</p>
        {showButtons && (
          <div className="flex gap-5">
            <Button
              onClick={() => router.push(primaryButtonUrl)}
              className="capitalize">
              {primaryButtonText}
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push(secondaryButtonUrl)}
              className="capitalize">
              {secondaryButtonText}
            </Button>
          </div>
        )}
      </div>
    );
  };

  const HeroImage = () => (
    <div className="w-full md:w-1/2 rounded-2xl">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={5000}
        height={4000}
        className="rounded-2xl"
      />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-32 pt-16 pb-24 md:pt-20 md:pb-28 xl:pb-36">
      <HeroContent />
      <HeroImage />
    </div>
  );
}

export default Hero;
