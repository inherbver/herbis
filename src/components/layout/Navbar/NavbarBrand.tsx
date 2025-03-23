'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';

export interface NavbarBrandProps {
  className?: string;
}

export const NavbarBrand = React.memo(function NavbarBrand({ className = '' }: NavbarBrandProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center space-x-2 font-bold tracking-wider text-primary-500", 
        className
      )}
    >
      <span className="font-serif italic text-2xl">InHerbisVeritas</span>
    </Link>
  );
});
