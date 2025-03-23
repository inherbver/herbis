import React from 'react';

// Import des composants de contact
import { ContactHeader } from '@/src/components/contact/ContactHeader';
import { ContactCards } from '@/src/components/contact/ContactCards';
import { ContactSocial } from '@/src/components/contact/ContactSocial';
import { ContactFAQ } from '@/src/components/contact/ContactFAQ';
import { ContactCTA } from '@/src/components/contact/ContactCTA';

export const metadata = {
  title: 'Contact - In Herbis Veritas',
  description: 'Besoin d\'aide ? N\'hésitez pas à nous contacter. Notre équipe est à votre disposition pour répondre à toutes vos questions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* En-tête immersif */}
      <ContactHeader 
        title="Contactez-nous" 
        description="Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question sur nos produits, commandes ou collaborations."
        backgroundImage="/images/contact-header.jpg"
      />
      
      {/* Section principale */}
      <section className="container mx-auto px-4 py-12">
        {/* Cartes de contact */}
        <h2 className="text-3xl font-cinzel text-center mb-12">Comment pouvons-nous vous aider ?</h2>
        <ContactCards />
      </section>
      
      {/* Section Réseaux sociaux */}
      <section className="container mx-auto px-4 py-12 bg-accent/5">
        <h2 className="text-3xl font-cinzel text-center mb-10">Suivez-nous</h2>
        <ContactSocial />
      </section>
      
      {/* Section FAQ */}
      <ContactFAQ />
      
      {/* Call to Action */}
      <ContactCTA />
    </main>
  );
}
