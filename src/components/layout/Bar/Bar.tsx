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
  // Détermine les classes de base en fonction de la position et de la variante
  const baseClasses = "w-full flex items-center justify-between";
  
  // Les classes fournies par l'appelant (comme bg-navigation ou bg-footer) ont priorité
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <BarContext.Provider value={{ position, variant }}>
      <header 
        className={combinedClasses}
        style={{ backgroundColor: position === 'top' ? 'var(--navigation)' : 'var(--footer)' }}
      >
        <div className="container mx-auto flex items-center justify-between">
          {children}
        </div>
      </header>
    </BarContext.Provider>
  );
};
