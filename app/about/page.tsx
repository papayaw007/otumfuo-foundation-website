import BoardOfTrustees from '@/components/about/BoardOfTrustees';
import CoreValues from '@/components/about/CoreValues';
import MissionVision from '@/components/about/MissionVision';
import ThematicAccordion from '@/components/about/ThematicAccordion';
import Hero from '@/components/shared/hero';
import img from '@/public/about.jpg';

function About() {
  return (
    <>
      <Hero
        title="who we are"
        description="Through this charity foundation, the Otumfuo Osei Tutu II
        Foundation, he pushes the bounds to promote this goal of
        change and transformation not only in Asanteman but the whole
        of Ghana."
        imageSrc={img}
      />
      <CoreValues />
      <MissionVision />
      <ThematicAccordion />
      <BoardOfTrustees />
    </>
  );
}

export default About;
