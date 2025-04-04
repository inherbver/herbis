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
      className={cn(
        "mt-auto py-6 bg-footer text-footer-foreground",
        "border-t border-border/30",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Éléments décoratifs en arrière-plan avec opacité réduite pour ne pas masquer la couleur */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      </div>
      
      {children}
    </Bar>
  );
}
