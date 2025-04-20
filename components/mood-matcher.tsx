"use client";

import { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateMockContent } from '@/lib/mock-data';
import ContentCard from './content-card';

const MOODS = [
  'Exciting', 'Happy', 'Relaxing', 'Thought-provoking', 'Intense', 'Nostalgic'
];

export const MoodMatcher: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(MOODS[0]);
  const [moodContent, setMoodContent] = useState<Record<string, any[]>>({});
  
  useEffect(() => {
    const moodData: Record<string, any[]> = {};
    
    MOODS.forEach(mood => {
      moodData[mood] = generateMockContent(mood.toLowerCase(), 6);
    });
    
    setMoodContent(moodData);
  }, []);

  if (!isExpanded) {
    return (
      <div className="px-4 md:px-16 mb-12">
        <Button
          onClick={() => setIsExpanded(true)}
          className="group bg-gradient-to-r from-[#E50914] to-[#FF4B45] text-white hover:from-[#E50914] hover:to-[#FF6B65] rounded-md"
        >
          <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
          <span className="font-medium">Mood Match</span>
          <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">- Find content for your mood</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-16 mb-12 bg-[#1A1A1A] rounded-lg p-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-[#E50914]" />
          <h2 className="text-xl font-semibold text-white">Mood Matcher</h2>
          <span className="ml-2 text-gray-400 text-sm">Find content that matches how you feel</span>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsExpanded(false)}
          className="text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[#262626] mb-6 w-full justify-start overflow-x-auto scrollbar-hide space-x-2">
          {MOODS.map(mood => (
            <TabsTrigger 
              key={mood} 
              value={mood}
              className="data-[state=active]:bg-[#E50914] data-[state=active]:text-white"
            >
              {mood}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {MOODS.map(mood => (
          <TabsContent key={mood} value={mood} className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {moodContent[mood]?.map((content, index) => (
                <div key={`${content.id}-${index}`} className="h-[170px]">
                  <ContentCard
                    content={content}
                    index={index}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4 italic">
              Content selected to match your {mood.toLowerCase()} mood
            </p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};