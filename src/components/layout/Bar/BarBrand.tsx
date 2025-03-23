'use client';

import React from 'react';
import Link from 'next/link';
import { useBar } from './BarContext';

export interface BarBrandProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const BarBrand: React.FC<BarBrandProps> = ({
  children,
  href = '/',
  className = '',
}) => {
  const { variant } = useBar();
  
  const content = (
    <div className={`
      flex items-center gap-2 
      ${variant === 'primary' ? 'text-primary font-cinzel' : 'text-accent-foreground'} 
      ${className}
    `}>
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
        {content}
      </Link>
    );
  }

  return content;
};
