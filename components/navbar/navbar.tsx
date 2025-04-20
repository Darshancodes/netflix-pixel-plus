"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavbarItem from './navbar-item';
import { MobileNavbar } from './mobile-navbar';
import { SearchBar } from './search-bar';

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'TV Shows', href: '/shows' },
  { label: 'Movies', href: '/movies' },
  { label: 'New & Popular', href: '/new' },
  { label: 'My List', href: '/mylist' },
  { label: 'Browse by Languages', href: '/browse' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 66);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-500",
        isScrolled ? "bg-[#141414] shadow-md" : "bg-gradient-to-b from-black/80 via-black/60 to-transparent"
      )}
    >
      <div className="px-4 md:px-16 py-4 flex items-center transition duration-500">
        <div className="flex items-center gap-8">
          <Link href="/" className="h-[25px] w-[92.5px] relative">
            <svg viewBox="0 0 111 30" className="fill-[#E50914] h-full w-full" focusable="false">
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2499766 C43.7810479,26.2499766 42.1876465,26.2499766 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {MENU_ITEMS.map((item) => (
              <NavbarItem key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
        </div>

        <MobileNavbar items={MENU_ITEMS} />

        <div className="flex items-center gap-6 ml-auto">
          {showSearch ? (
            <SearchBar onClose={() => setShowSearch(false)} />
          ) : (
            <button 
              onClick={() => setShowSearch(true)} 
              className="text-white hover:text-gray-300 transition"
              aria-label="Search"
            >
              <Search className="h-[22px] w-[22px]" strokeWidth={2} />
            </button>
          )}
          
          <Link 
            href="/notifications" 
            className="text-white hover:text-gray-300 transition"
            aria-label="Notifications"
          >
            <Bell className="h-[22px] w-[22px]" strokeWidth={2} />
          </Link>
          
          <div className="flex items-center gap-2 cursor-pointer relative group">
            <div className="w-8 h-8 rounded overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=120" 
                alt="User profile" 
                className="h-full w-full object-cover"
              />
            </div>
            <ChevronDown className="h-4 w-4 text-white transition-transform duration-200 group-hover:rotate-180" />
            
            <div className="absolute top-full right-0 mt-2 w-[220px] bg-[#141414]/95 border border-gray-800 rounded-sm p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
              <div className="flex flex-col py-2">
                <Link href="/profile" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700/40">
                  <div className="w-8 h-8 rounded overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=120" 
                      alt="User profile" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm">Username</span>
                </Link>
                <Link href="/manage-profiles" className="px-3 py-2 text-sm hover:bg-gray-700/40">Manage Profiles</Link>
                <Link href="/account" className="px-3 py-2 text-sm hover:bg-gray-700/40">Account</Link>
                <Link href="/help" className="px-3 py-2 text-sm hover:bg-gray-700/40">Help Center</Link>
                <hr className="border-gray-600 my-2" />
                <Link href="/signout" className="px-3 py-2 text-sm hover:bg-gray-700/40">Sign out of Netflix</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;