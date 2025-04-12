
import React from 'react'
import Hero from "../shared/hero";
import img from '@/public/stories.jpg';

 function TextBanner() {
  return (
    <div>
       <Hero
        title="make a donation"
        description="Your acts of generosity make it possible to touch and transform the lives of many across the country."
        imageSrc={img}
        primaryButtonText="Donate Now"
        primaryButtonUrl={'/donate'}
        secondaryButtonText="Get In Touch"
        secondaryButtonUrl={'/contact'}
      />
    </div>
  )
}

export default TextBanner;
