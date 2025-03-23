'use client';

import React from 'react';
import { Bar } from '../Bar';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  className = '',
}) => {
  return (
    <Bar 
      position="top" 
      variant="primary" 
      className={`sticky top-0 z-50 border-b border-border shadow-sm ${className}`}
    >
      {children}
    </Bar>
  );
};

export default Navbar;
