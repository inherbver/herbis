'use client';

import React from 'react';
import { cn } from '@/src/lib/utils';
import { useFooter } from './useFooter';

interface FooterLegalProps {
  className?: string;
}

export function FooterLegal({ className }: FooterLegalProps) {
  const { copyrightText } = useFooter();

  return (
    <div className={cn('flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground', className)}>
      <p>{copyrightText}</p>
      <div className="mt-4 sm:mt-0 flex gap-4">
        <a href="/privacy" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
        <a href="/terms" className="hover:text-foreground transition-colors">Conditions d'utilisation</a>
      </div>
    </div>
  );
}
