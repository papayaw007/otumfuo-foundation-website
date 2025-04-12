import Partners from '@/components/home/Partners';
import RecentStories from '@/components/home/RecentStories';
import StatsBanner from '@/components/home/StatsBanner';
import TextBanner from '@/components/home/TextBanner';
import ThematicAreas from '@/components/home/ThematicAreas';


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
       <TextBanner />
      <StatsBanner />
      <ThematicAreas />
      <RecentStories />
      <Partners />
   
    </div>
  );
}
