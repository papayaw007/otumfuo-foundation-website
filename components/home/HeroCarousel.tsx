'use client';
import * as React from 'react';
import Hero from '../shared/hero';
import { homeData } from '@/lib/data';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {homeData.map((home) => (
            <CarouselItem key={home.id}>
              <Hero
                title={home.title}
                description={home.description}
                imageSrc={home.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default HeroCarousel;
