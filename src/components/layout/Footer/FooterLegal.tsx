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
    <div className={cn('text-sm text-muted-foreground', className)}>
      <p>{copyrightText}</p>
    </div>
  );
}
