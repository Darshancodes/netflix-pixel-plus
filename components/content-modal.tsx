"use client";

import { Play, Plus, ThumbsUp, VolumeX, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  year?: number;
  rating?: string;
  duration?: string;
  genres?: string[];
}

export const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageUrl,
  year = 2023,
  rating = "TV-MA",
  duration = "2h 15m",
  genres = ["Drama", "Thriller", "Sci-Fi"],
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full p-0 bg-[#181818] text-white border-0 rounded-md overflow-hidden">
        <div className="relative h-[35vh] md:h-[50vh]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#181818]" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#181818] text-white p-1 rounded-full hover:bg-[#232323] transition"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-10 left-8 right-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
            
            <div className="flex space-x-3">
              <Button
                className="bg-white text-black hover:bg-white/90 rounded-md font-semibold flex items-center gap-2 px-6"
              >
                <Play className="h-5 w-5 fill-black" strokeWidth={2} />
                Play
              </Button>
              
              <Button
                variant="ghost"
                className="border-2 border-gray-400 rounded-full p-1 hover:border-white transition"
              >
                <Plus className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                className="border-2 border-gray-400 rounded-full p-1 hover:border-white transition"
              >
                <ThumbsUp className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                className="border-2 border-gray-400 rounded-full p-1 hover:border-white transition ml-auto"
              >
                <VolumeX className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-green-500 font-semibold">98% Match</span>
                <span>{year}</span>
                <span className="border border-gray-600 px-1">{rating}</span>
                <span>{duration}</span>
                <span className="border border-gray-600 rounded px-1 text-xs">HD</span>
              </div>
              
              <p className="text-white/90">{description}</p>
            </div>
            
            <div className="w-1/3 ml-8 text-sm space-y-4 hidden md:block">
              <div>
                <span className="text-gray-400">Cast:</span>{" "}
                <span>Actor One, Actor Two, Actor Three, Actor Four</span>
              </div>
              
              <div>
                <span className="text-gray-400">Genres:</span>{" "}
                <span>{genres.join(", ")}</span>
              </div>
              
              <div>
                <span className="text-gray-400">This show is:</span>{" "}
                <span>Suspenseful, Dark, Dystopian</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <h3 className="font-semibold text-xl mb-4">More Like This</h3>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-gray-800 rounded overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${PEXELS_IMAGE_IDS[i]}/pexels-photo-${PEXELS_IMAGE_IDS[i]}.jpeg?auto=compress&cs=tinysrgb&w=500`}
                    alt="Similar content"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PEXELS_IMAGE_IDS = [
  '3945317', // Dark city
  '2873486', // Movie theater
  '2510428', // Abstract lights
  '2774556', // Cinema
  '436413',  // Theater
];