'use client';

import React from 'react';
import { useBar } from './BarContext';

export interface BarIconsProps {
  children: React.ReactNode;
  className?: string;
}

export const BarIcons: React.FC<BarIconsProps> = ({
  children,
  className = '',
}) => {
  const { position, variant } = useBar();
  
  return (
    <div className={`
      flex items-center gap-4
      ${position === 'top' ? 'justify-end' : 'justify-start'}
      ${variant === 'primary' ? 'text-primary' : 'text-accent-foreground'}
      ${className}
    `}>
      {children}
    </div>
  );
};
