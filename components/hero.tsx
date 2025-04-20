"use client";

import { useEffect, useState } from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContentModal } from './content-modal';

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
  }, [imageUrl]);

  return (
    <div className="relative h-[56.25vw] min-h-[500px] max-h-[800px] w-full">
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-[#141414]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-[#141414]/20" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container px-4 md:px-16 pb-[9.25vw] pt-[13.25vw]">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 transition-all duration-700 opacity-0 animate-[fadeInUp_1s_0.5s_forwards] max-w-[600px]"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.45)' }}
          >
            {title}
          </h1>
          
          <p 
            className="text-white text-[1.2vw] min-text-[12px] max-w-[600px] mb-6 transition-all duration-700 opacity-0 animate-[fadeInUp_1s_0.7s_forwards] line-clamp-3"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.45)' }}
          >
            {description}
          </p>
          
          <div className="flex items-center gap-3 transition-all duration-700 opacity-0 animate-[fadeInUp_1s_0.9s_forwards]">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-black rounded-[4px] font-medium flex items-center gap-2 px-6 py-3 text-[1.2vw] min-text-[16px]"
              onClick={() => setShowModal(true)}
            >
              <Play className="h-7 w-7 fill-black" strokeWidth={2} />
              Play
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.6)] text-white rounded-[4px] font-medium flex items-center gap-2 px-6 py-3 text-[1.2vw] min-text-[16px]"
              onClick={() => setShowModal(true)}
            >
              <Info className="h-7 w-7" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      <ContentModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={title}
        description={description}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Hero;