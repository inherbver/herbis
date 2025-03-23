'use client';

import React from 'react';
import { cn } from '@/src/lib/utils';
import { NavbarBrand } from './NavbarBrand';
import { NavbarLinks } from './NavbarLinks';
import { NavbarActions } from './NavbarActions';
import { NavbarMobileMenu } from './NavbarMobileMenu';

export interface ComposedNavbarProps {
  className?: string;
}

export function ComposedNavbar({ className = '' }: ComposedNavbarProps) {
  return (
    <div className={cn("flex justify-between items-center h-16 px-4 border-b border-border bg-background", className)}>
      <NavbarBrand />
      <NavbarLinks className="mx-auto" />
      <div className="flex items-center space-x-1">
        <NavbarActions />
        <NavbarMobileMenu />
      </div>
    </div>
  );
}
