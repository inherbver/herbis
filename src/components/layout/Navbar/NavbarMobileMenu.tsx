'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button, Sheet, SheetContent, SheetTrigger } from '@/src/components/ui';
import { useNavbar } from './useNavbar';
import { cn } from '@/src/lib/utils';

export interface NavbarMobileMenuProps {
  className?: string;
}

export function NavbarMobileMenu({ className = '' }: NavbarMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const { routes, isActive } = useNavbar();

  return (
    <div className={cn("md:hidden", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-primary-500 hover:text-neutral-500">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-neutral-100 border-l border-border pt-12">
          <div className="flex flex-col gap-8 mt-4">
            {routes.map((route) => {
              const active = isActive(route.href);
              
              return (
                <Link 
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg uppercase font-medium tracking-wide",
                    active 
                      ? "text-neutral-500 border-l-2 border-neutral-500 pl-4" 
                      : "text-primary-500 hover:text-neutral-500 pl-4"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {route.label}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
