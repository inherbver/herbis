import React from 'react';
import IconWrapper, { IconWrapperProps } from '../IconWrapper';

export interface UserIconProps extends Omit<IconWrapperProps, 'children'> {}

export const UserIcon: React.FC<UserIconProps> = (props) => {
  return (
    <IconWrapper {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </IconWrapper>
  );
};

export default UserIcon;
