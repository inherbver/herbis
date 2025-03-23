'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { useFooter, FooterLinkCategory } from './useFooter';

interface FooterLinksProps {
  className?: string;
}

export function FooterLinks({ className }: FooterLinksProps) {
  const { linkCategories, isActive } = useFooter();

  return (
    <div className={cn('grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3', className)}>
      {linkCategories.map((category) => (
        <div key={category.title} className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">{category.title}</h4>
          <ul className="space-y-2">
            {category.links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={cn(
                    'text-sm text-muted-foreground hover:text-foreground transition-colors',
                    isActive(link.href) && 'text-foreground font-medium'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
