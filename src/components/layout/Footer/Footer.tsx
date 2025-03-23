'use client';

import React from 'react';
import { Bar } from '../Bar';

interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <Bar 
      position="bottom" 
      variant="secondary" 
      className={`mt-auto border-t border-border py-8 ${className}`}
    >
      {children}
    </Bar>
  );
};

export default Footer;
