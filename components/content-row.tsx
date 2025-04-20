"use client";

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './content-card';
import { generateMockContent } from '@/lib/mock-data';

interface ContentRowProps {
  title: string;
  endpoint: string;
  delay?: number;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, endpoint, delay = 0 }) => {
  const [content, setContent] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real app, you'd fetch from an API based on the endpoint
    // For this demo, we'll use mock data
    const mockContent = generateMockContent(endpoint, 12);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      setContent(mockContent);
      setIsLoaded(true);
      
      // Check if scrollable after content loads
      checkScrollable();
    }, 300 + delay);
    
    return () => clearTimeout(timer);
  }, [endpoint, delay]);

  useEffect(() => {
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const checkScrollable = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { clientWidth } = rowRef.current;
      const scrollDistance = clientWidth * 0.8;
      
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth'
      });
      
      // Update scroll buttons after animation
      setTimeout(checkScrollable, 500);
    }
  };

  const handleScroll = () => {
    checkScrollable();
  };

  return (
    <div 
      className={`mb-8 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-xl font-semibold text-white px-4 md:px-16 mb-2">{title}</h2>
      
      <div className="relative group">
        <div 
          ref={rowRef}
          className="flex overflow-x-scroll scrollbar-hide px-4 md:px-16 space-x-2 py-4"
          onScroll={handleScroll}
        >
          {content.map((item, index) => (
            <ContentCard
              key={`${item.id}-${index}`}
              content={item}
              index={index}
            />
          ))}
        </div>
        
        {canScrollLeft && (
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-1 ml-2 z-10 opacity-0 group-hover:opacity-100 transition"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        )}
        
        {canScrollRight && (
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-1 mr-2 z-10 opacity-0 group-hover:opacity-100 transition"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;