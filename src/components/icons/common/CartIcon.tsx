import React from 'react';
import IconWrapper, { IconWrapperProps } from '../IconWrapper';

export interface CartIconProps extends Omit<IconWrapperProps, 'children'> {}

export const CartIcon: React.FC<CartIconProps> = (props) => {
  return (
    <IconWrapper {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </IconWrapper>
  );
};

export default CartIcon;
