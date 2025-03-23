import React from 'react';
import { colors } from '@/styles/tokens';

export interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

export const IconWrapper: React.FC<IconWrapperProps> = ({
  size = 'md',
  color,
  className = '',
  children,
  ...props
}) => {
  const dimensions = sizeMap[size] || sizeMap.md;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimensions}
      height={dimensions}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon ${className}`}
      {...props}
    >
      {children}
    </svg>
  );
};

export default IconWrapper;
