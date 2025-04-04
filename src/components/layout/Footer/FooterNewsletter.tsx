'use client';

import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { Mail } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';

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
    <div className={cn('space-y-4', className)}>
      <Card className="bg-card/50 border border-border/50 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center space-x-2">
            <Mail className="h-4 w-4 text-accent" />
            <span>Restez informé</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Astuces, nouveautés et offres exclusives directement dans votre boîte mail.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="relative">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-24 border-border/50 focus:border-accent bg-background/80"
                required
              />
              <Button 
                type="submit" 
                size="sm"
                disabled={isSubmitting}
                className="absolute right-1 top-1 h-8"
              >
                {isSubmitting ? 'Envoi...' : 'S\'inscrire'}
              </Button>
            </div>
            
            {message && (
              <p className={cn(
                'text-sm mt-2 animate-in fade-in slide-in-from-bottom-2',
                message.type === 'success' ? 'text-green-600' : 'text-red-600'
              )}>
                {message.text}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
