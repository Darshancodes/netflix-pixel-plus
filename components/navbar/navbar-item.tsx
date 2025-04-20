"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href}
      className={cn(
        'text-[14px] transition-colors duration-300',
        isActive ? 'text-white font-medium' : 'text-[#e5e5e5] hover:text-[#b3b3b3]'
      )}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;