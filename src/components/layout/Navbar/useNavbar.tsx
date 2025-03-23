'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export interface NavRoute {
  href: string;
  label: string;
}

export function useNavbar() {
  const pathname = usePathname();
  
  const routes = useMemo<NavRoute[]>(() => [
    { href: '/shop', label: 'BOUTIQUE' },
    { href: '/magazine', label: 'MAGAZINE' },
    { href: '/events', label: 'RENCONTRES' },
    { href: '/contact', label: 'CONTACT' },
  ], []);
  
  const isActive = (path: string) => pathname === path;
  
  // Simulated cart count - should be replaced with real data from a cart context/store
  const cartCount = 0;
  
  return {
    routes,
    isActive,
    pathname,
    cartCount
  };
}
