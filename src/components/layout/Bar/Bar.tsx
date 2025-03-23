'use client';

import React from 'react';
// Importer depuis le fichier index pour éviter les problèmes de dépendance circulaire
import { BarContext } from './BarContext';

// Types
export interface BarProps {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
  variant?: 'primary' | 'secondary';
  className?: string;
}

// Définir le type avec des sous-composants
type BarComponentType = React.FC<BarProps> & {
  Brand?: React.FC<any>;
  Links?: React.FC<any>;
  Icons?: React.FC<any>;
};

// Main Component
export const Bar: BarComponentType = ({
  children,
  position = 'top',
  variant = 'primary',
  className = '',
}: BarProps) => {
  return (
    <BarContext.Provider value={{ position, variant }}>
      <header 
        className={`
          w-full flex items-center justify-between
          ${position === 'top' ? 'py-4' : 'py-6'}
          ${variant === 'primary' ? 'bg-background text-foreground' : 'bg-accent text-accent-foreground'}
          ${className}
        `}
      >
        <div className="container mx-auto flex items-center justify-between">
          {children}
        </div>
      </header>
    </BarContext.Provider>
  );
};

// Nous ajouterons les sous-composants après leur import dans le fichier index
