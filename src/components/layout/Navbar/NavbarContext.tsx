'use client';

import { createContext, useContext } from 'react';

export interface NavbarContextType {
  variant: 'primary' | 'secondary';
  position: 'top' | 'bottom';
}

export const NavbarContext = createContext<NavbarContextType>({
  variant: 'primary',
  position: 'top',
});

export const useNavbarContext = () => useContext(NavbarContext);
