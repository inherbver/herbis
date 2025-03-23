'use client';

import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';

interface FooterNewsletterProps {
  className?: string;
}

export function FooterNewsletter({ className }: FooterNewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{text: string; type: 'success' | 'error'} | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulating API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({
        text: 'Merci pour votre inscription à notre newsletter !',
        type: 'success'
      });
      setEmail('');
    } catch (error) {
      setMessage({
        text: 'Une erreur est survenue. Veuillez réessayer.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <div className={cn('space-y-3', className)}>
      <h4 className="text-sm font-medium text-foreground">Newsletter</h4>
      <p className="text-sm text-muted-foreground max-w-xs">
        Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres spéciales.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="min-w-[200px]"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi...' : 'S\'inscrire'}
        </Button>
      </form>
      
      {message && (
        <p className={cn(
          'text-sm mt-2',
          message.type === 'success' ? 'text-green-600' : 'text-red-600'
        )}>
          {message.text}
        </p>
      )}
    </div>
  );
}
