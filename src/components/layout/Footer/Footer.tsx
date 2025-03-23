'use client';

import React from 'react';
import { Bar } from '../Bar';
import { cn } from '@/src/lib/utils';

interface FooterProps {
  children: React.ReactNode;
  className?: string;
  position?: 'bottom';
  variant?: 'primary' | 'secondary';
}

export function Footer({
  children,
  className = '',
  position = 'bottom',
  variant = 'secondary',
}: FooterProps) {
  return (
    <Bar 
      position={position} 
      variant={variant} 
      className={cn(`mt-auto border-t border-border py-8`, className)}
    >
      {children}
    </Bar>
  );
}
