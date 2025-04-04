'use client';

import React from 'react';
import { cn } from '@/src/lib/utils';
import { useFooter } from './useFooter';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  ExternalLink,
  Users
} from 'lucide-react';

interface FooterSocialProps {
  className?: string;
}

export function FooterSocial({ className }: FooterSocialProps) {
  const { socialLinks } = useFooter();

  // Configuration améliorée des icônes
  const socialIcons: Record<string, React.ReactNode> = {
    instagram: <Instagram className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    pinterest: <ExternalLink className="h-5 w-5" />
  };

  return (
    <div className={cn('space-y-4', className)}>
      <h4 className="text-sm font-medium text-foreground flex items-center space-x-2 border-b border-border/50 pb-2">
        <Users className="h-4 w-4 text-accent" />
        <span>Rejoignez notre communauté</span>
      </h4>
      
      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group flex h-10 w-10 items-center justify-center rounded-full 
                     bg-background border border-border/50 shadow-sm hover:border-accent/30 
                     hover:shadow-md transition-all duration-300 hover:scale-110"
          >
            <span className="text-muted-foreground group-hover:text-accent transition-colors">
              {socialIcons[link.icon] || link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
