import Hero from '@/components/shared/hero';
import UpcomingEvents from '@/components/stories/UpcomingEvents';

import AllStories from '@/components/stories/AllStories';
import img from '@/public/stories2.jpg';
import RecentStories2 from '@/components/stories/RecentStories';

function Stories() {
  return (
    <div>
      <Hero
        title="stories"
        description="Find out more information on the latest news and events involving the Otumfuo foundation."
        imageSrc={img}
        primaryButtonText="Donate Now"
        primaryButtonUrl={'/donate'}
        secondaryButtonText="Get In Touch"
        secondaryButtonUrl={'/contact'}
      />
      <div>
        <UpcomingEvents />
        <RecentStories2 />
        <AllStories />
      </div>
    </div>
  );
}

export default Stories;
