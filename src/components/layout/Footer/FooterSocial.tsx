'use client';

import React from 'react';
import { cn } from '@/src/lib/utils';
import { useFooter } from './useFooter';
import { Button } from '@/src/components/ui/button';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  ExternalLink
} from 'lucide-react';

interface FooterSocialProps {
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  instagram: <Instagram className="h-4 w-4" />,
  facebook: <Facebook className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  pinterest: <ExternalLink className="h-4 w-4" />
};

export function FooterSocial({ className }: FooterSocialProps) {
  const { socialLinks } = useFooter();

  return (
    <div className={cn('space-y-3', className)}>
      <h4 className="text-sm font-medium text-foreground">Suivez-nous</h4>
      <div className="flex gap-2">
        {socialLinks.map((link) => (
          <Button
            key={link.href}
            variant="outline"
            size="icon"
            asChild
            className="h-8 w-8 rounded-full"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {iconMap[link.icon] || link.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
