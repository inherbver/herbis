'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

interface FooterBrandProps {
  className?: string;
}

export function FooterBrand({ className }: FooterBrandProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center space-x-2">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Leaf className="h-5 w-5 text-accent" />
        </div>
        <Link href="/" className="text-xl font-semibold text-foreground">
          InHerbisVeritas
        </Link>
      </div>
      
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
        La sagesse des plantes au service de votre bien-être quotidien, 
        sélectionnées avec soin et respect pour la nature.
      </p>
      
      <Button variant="outline" className="group" asChild>
        <Link href="/shop" className="flex items-center space-x-2">
          <span>Découvrir nos produits</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}
