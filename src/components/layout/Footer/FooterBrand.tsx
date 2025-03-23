'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';

interface FooterBrandProps {
  className?: string;
}

export function FooterBrand({ className }: FooterBrandProps) {
  return (
    <div className={cn('flex flex-col space-y-2', className)}>
      <Link href="/" className="text-xl font-semibold text-foreground">
        InHerbisVeritas
      </Link>
      <p className="text-sm text-muted-foreground max-w-xs">
        Des produits naturels issus de plantes soigneusement sélectionnées pour votre bien-être au quotidien.
      </p>
    </div>
  );
}
