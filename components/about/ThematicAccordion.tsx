import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { accordionItems } from '@/lib/data';
import SectionHeading from '../shared/heading';

function ThematicAreas() {
  return (
    <section className="mt-24">
      <SectionHeading title="Thematic Areas" />
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="mt-12 w-full shadow-2xl px-2 md:px-3 py-4 rounded-3xl">
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="px-6 rounded-2xl data-[state=open]:bg-primary data-[state=closed]:bg-white data-[state=open]:text-white data-[state=closed]:text-black transition-none">
            <div className="flex items-start space-x-6">
              <span className="py-4 font-bold text-2xl md:text-3xl">
                {item.number}
              </span>
              <div className="w-full">
                <AccordionTrigger className="font-bold text-lg md:text-2xl w-full mt-0.5">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="md:text-lg whitespace-pre-wrap">
                  {item.content}
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default ThematicAreas;
