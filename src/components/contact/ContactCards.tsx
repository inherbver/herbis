"use client";

import React from 'react';
import { MapPin, Phone, Mail, Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

export function ContactCards() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@inherbisveritas.fr");
    // Idéalement, ajouter un toast de confirmation ici
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=25+rue+des+Plantes+75014+Paris+France", "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Carte Téléphone */}
      <div className="bg-background border border-border/30 hover:border-primary/50 transition-colors duration-300 shadow-sm rounded-xl p-6">
        <div className="pb-2">
          <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <Phone className="text-primary h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">Par téléphone</h3>
        </div>
        <div>
          <p className="text-foreground font-medium text-lg mb-2">+33 (0)1 23 45 67 89</p>
          <p className="text-muted-foreground text-sm mb-6">
            Lundi - Vendredi: 9h00 - 18h00<br />
            Samedi: 10h00 - 16h00<br />
            Dimanche: Fermé
          </p>
          <Button variant="outline" className="w-full">
            Appeler maintenant
          </Button>
        </div>
      </div>

      {/* Carte Email */}
      <div className="bg-background border border-border/30 hover:border-accent/50 transition-colors duration-300 shadow-sm rounded-xl p-6">
        <div className="pb-2">
          <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <Mail className="text-accent h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">Par email</h3>
        </div>
        <div>
          <p className="text-foreground font-medium text-lg mb-2">contact@inherbisveritas.fr</p>
          <p className="text-muted-foreground text-sm mb-6">
            Notre équipe vous répond sous 24h ouvrées.<br />
            Pour toute question sur nos produits ou votre commande.
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1" onClick={handleCopyEmail}>
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
            <Button className="flex-1" asChild>
              <a href="mailto:contact@inherbisveritas.fr">
                Envoyer un email
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Carte Adresse */}
      <div className="bg-background border border-border/30 hover:border-secondary/50 transition-colors duration-300 shadow-sm rounded-xl p-6">
        <div className="pb-2">
          <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <MapPin className="text-secondary h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">Notre adresse</h3>
        </div>
        <div>
          <p className="text-foreground font-medium text-lg mb-2">Paris, France</p>
          <p className="text-muted-foreground text-sm mb-6">
            inHerbisVeritas<br />
            25 rue des Plantes<br />
            75014 Paris<br />
            France
          </p>
          <Button variant="outline" className="w-full" onClick={openGoogleMaps}>
            <ExternalLink className="h-4 w-4 mr-2" />
            Voir sur Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
}
