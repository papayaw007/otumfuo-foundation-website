'use client';
import React from 'react';

import CountUp from 'react-countup';
import { statsData } from '@/lib/data';

const easeOutExpo = (t: number, b: number, c: number, d: number) => {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
};

const AnimatedNumber = ({ to }: { to: number }) => {
  return (
    <CountUp
      end={to}
      duration={2.5}
      easingFn={easeOutExpo}
      className=""
    />
  );
};

function StatsBanner() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center p-6 md:p-12 lg:p-20 bg-primary text-white rounded-4xl gap-6 md:gap-10 lg:gap-20">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center w-1/2 sm:w-1/3 md:w-auto mb-8 md:mb-4">
            <p className="text-xl md:text-3xl font-semibold">
              <AnimatedNumber to={stat.number} />+
            </p>
            <p className="text-center text-sm md:text-base">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default StatsBanner;
