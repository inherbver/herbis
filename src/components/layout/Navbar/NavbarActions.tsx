'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react';
import { Badge, Button } from '@/src/components/ui';
import { useNavbar } from './useNavbar';
import { cn } from '@/src/lib/utils';

export interface NavbarActionsProps {
  className?: string;
}

export const NavbarActions = React.memo(function NavbarActions({ className = '' }: NavbarActionsProps) {
  const { cartCount } = useNavbar();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button variant="ghost" size="icon" className="text-primary-500 hover:text-neutral-500" asChild>
        <Link href="/account">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Link>
      </Button>
      
      <Button variant="ghost" size="icon" className="text-primary-500 hover:text-neutral-500 relative" asChild>
        <Link href="/cart">
          <ShoppingBag className="h-5 w-5" />
          <span className="sr-only">Cart</span>
          {cartCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 rounded-full bg-primary-500 text-white text-xs">
              {cartCount}
            </Badge>
          )}
        </Link>
      </Button>
    </div>
  );
});
