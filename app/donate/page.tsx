import PaymentBanner from '@/components/donate/PaymentBanner';
import img from '@/public/about.jpg';
import Hero from '@/components/shared/hero';
import React from 'react';

function Donate() {
  return (
    <div>
      <Hero
        title="make a donation"
        description="Your acts of generosity make it possible to touch and transform the lives of many across the country."
        imageSrc={img}
        showButtons={false}
      />
      <PaymentBanner />
    </div>
  );
}

export default Donate;
