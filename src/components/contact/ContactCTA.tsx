"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/src/components/ui';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/src/components/ui';

export function ContactCTA() {
  return (
    <div className="py-16 bg-accent/5">
      <Card className="max-w-3xl mx-auto border-border/30 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl md:text-3xl">
            Envie de découvrir nos produits ?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            Explorez notre collection de produits bio et naturels, minutieusement sélectionnés pour leur qualité et leur respect de l'environnement.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button asChild className="flex items-center gap-2">
            <a href="/shop">
              Visiter la boutique
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/blog">Lire nos articles</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
