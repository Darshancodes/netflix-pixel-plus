"use client";

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  onClose: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  return (
    <div className="relative flex items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-[18px] w-[18px] text-[#e5e5e5]" strokeWidth={2} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Titles, people, genres"
            className="bg-[#141414]/90 border border-[#e5e5e5] text-white pl-10 pr-10 py-[6px] w-[240px] focus:w-[280px] transition-all duration-300 outline-none text-[14px] placeholder:text-[#e5e5e5]/60"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
            >
              <X className="h-[18px] w-[18px] text-[#e5e5e5]" strokeWidth={2} />
            </button>
          )}
        </div>
      </form>
      <button 
        onClick={onClose} 
        className="ml-4 text-[#e5e5e5] hover:text-white transition-colors duration-300"
      >
        <X className="h-[22px] w-[22px]" strokeWidth={2} />
      </button>
    </div>
  );
};