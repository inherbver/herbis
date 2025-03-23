'use client';

import React, { createContext, useContext } from 'react';

// Types
export interface BarContextType {
  position: 'top' | 'bottom';
  variant: 'primary' | 'secondary';
}

// Créer le contexte
export const BarContext = createContext<BarContextType>({
  position: 'top',
  variant: 'primary',
});

// Hook personnalisé pour accéder au contexte
export const useBar = () => useContext(BarContext);
