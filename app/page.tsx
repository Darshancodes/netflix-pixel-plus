import Navbar from '@/components/navbar/navbar';
import Hero from '@/components/hero';
import ContentRow from '@/components/content-row';
import Footer from '@/components/footer';
import { MoodMatcher } from '@/components/mood-matcher';

const CATEGORIES = [
  { title: 'Popular on Netflix', endpoint: 'popular' },
  { title: 'Trending Now', endpoint: 'trending' },
  { title: 'TV Shows', endpoint: 'tv' },
  { title: 'Movies', endpoint: 'movies' },
  { title: 'New Releases', endpoint: 'new' },
  { title: 'My List', endpoint: 'mylist' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero 
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
        imageUrl="https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&w=1800"
      />
      
      <div className="relative z-10 pb-16 -mt-32">
        <MoodMatcher />
        
        {CATEGORIES.map((category, index) => (
          <ContentRow 
            key={category.endpoint}
            title={category.title} 
            endpoint={category.endpoint}
            delay={index * 200}
          />
        ))}
      </div>
      
      <Footer />
    </main>
  );
}