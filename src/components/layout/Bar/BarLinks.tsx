'use client';

import React from 'react';
import { useBar } from './BarContext';

export interface BarLinksProps {
  children: React.ReactNode;
  className?: string;
}

export const BarLinks: React.FC<BarLinksProps> = ({
  children,
  className = '',
}) => {
  const { position, variant } = useBar();
  
  return (
    <nav className={`
      flex items-center gap-6
      ${position === 'top' ? 'justify-center flex-row' : 'flex-wrap justify-start'}
      ${variant === 'primary' ? 'text-foreground font-medium' : 'text-accent-foreground'}
      ${className}
    `}>
      {children}
    </nav>
  );
};
