"use client";

import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { ContentModal } from './content-modal';

interface ContentCardProps {
  content: any;
  index: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const delay = index * 100; // Stagger animation delay

  return (
    <>
      <div 
        className="flex-none relative group/item transition-transform duration-300 h-[170px]"
        style={{ 
          width: '250px',
          animationDelay: `${delay}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`
            relative w-full h-full overflow-hidden rounded-md transition-all duration-300 ease-in-out
            ${isHovered ? 'scale-110 z-10 shadow-2xl' : 'scale-100'}
          `}
        >
          <img 
            src={content.image} 
            alt={content.title} 
            className="w-full h-full object-cover transition-all duration-300"
          />
          
          {isHovered && (
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-3">
              <div className="flex justify-end opacity-0 group-hover/item:opacity-100 transition-opacity">
                <div className="bg-black/40 p-1 rounded-full">
                  <span className="text-xs text-green-400 font-semibold">98% Match</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowModal(true);
                    }}
                    className="bg-white rounded-full p-2 hover:bg-white/90 transition"
                  >
                    <Play className="h-4 w-4 fill-black" strokeWidth={2} />
                  </button>
                  
                  <button className="border-2 border-gray-400 rounded-full p-1 hover:border-white transition">
                    <Plus className="h-4 w-4 text-white" />
                  </button>
                  
                  <button className="border-2 border-gray-400 rounded-full p-1 hover:border-white transition">
                    <ThumbsUp className="h-4 w-4 text-white" />
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowModal(true);
                    }}
                    className="ml-auto border-2 border-gray-400 rounded-full p-1 hover:border-white transition"
                  >
                    <ChevronDown className="h-4 w-4 text-white" />
                  </button>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-white truncate">
                    {content.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                    <span className="text-green-400 font-semibold">New</span>
                    <span className="border border-gray-600 px-1">{content.rating}</span>
                    <span>{content.duration}</span>
                    <span className="border border-gray-600 rounded px-1 text-[10px]">HD</span>
                  </div>
                  <div className="text-xs text-gray-300 mt-1 line-clamp-1">
                    {content.genres.join(' • ')}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <ContentModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={content.title}
        description={content.description}
        imageUrl={content.image}
        year={content.year}
        rating={content.rating}
        duration={content.duration}
        genres={content.genres}
      />
    </>
  );
};

export default ContentCard;