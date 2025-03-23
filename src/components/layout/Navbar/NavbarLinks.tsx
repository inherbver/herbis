'use client';

import React from 'react';
import Link from 'next/link';
import { useNavbar } from './useNavbar';
import { cn } from '@/src/lib/utils';

export interface NavbarLinksProps {
  className?: string;
}

export const NavbarLinks = React.memo(function NavbarLinks({ className = '' }: NavbarLinksProps) {
  const { routes, isActive } = useNavbar();

  return (
    <div className={cn("hidden md:flex items-center space-x-6", className)}>
      {routes.map((route) => {
        const active = isActive(route.href);
        
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "relative font-medium tracking-wide uppercase text-base transition-colors duration-200",
              active 
                ? "text-neutral-500 after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-neutral-500" 
                : "text-primary-500 hover:text-neutral-500 hover:after:absolute hover:after:left-0 hover:after:bottom-[-5px] hover:after:h-[2px] hover:after:w-full hover:after:bg-neutral-500 hover:after:animate-fadeIn"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </div>
  );
});
