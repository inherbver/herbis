import React from 'react';
import IconWrapper, { IconWrapperProps } from '../IconWrapper';

export interface LogoIconProps extends Omit<IconWrapperProps, 'children'> {}

export const LogoIcon: React.FC<LogoIconProps> = (props) => {
  return (
    <IconWrapper viewBox="0 0 24 24" {...props}>
      {/* Simplified herb/plant icon */}
      <path d="M12 2c0 6 4 10 4 10s-4 4-4 10" />
      <path d="M12 12c6 0 10-4 10-4s-4-4-10-4" />
      <path d="M12 12c-6 0-10 4-10 4s4 4 10 4" />
      <circle cx="12" cy="12" r="1" />
    </IconWrapper>
  );
};

export default LogoIcon;
