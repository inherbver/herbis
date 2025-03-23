"use client";

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/src/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

export function ContactFAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Comment passer une commande ?",
      answer: "Vous pouvez passer commande directement sur notre site web en visitant la section boutique. Ajoutez les produits de votre choix à votre panier, puis suivez les étapes de paiement sécurisé."
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Nos produits sont généralement expédiés sous 24 à 48 heures ouvrables. La livraison prend ensuite 2 à 5 jours selon votre localisation. Un email de confirmation avec le numéro de suivi vous sera envoyé dès l'expédition."
    },
    {
      question: "Les produits sont-ils certifiés biologiques ?",
      answer: "Oui, tous nos produits sont certifiés biologiques par Ecocert et respectent les normes européennes les plus strictes en matière d'agriculture biologique et de développement durable."
    },
    {
      question: "Proposez-vous des échantillons ?",
      answer: "Oui, nous proposons des coffrets découverte contenant des échantillons de nos produits phares. C'est une excellente façon de découvrir notre gamme avant de vous engager sur des formats plus grands."
    },
    {
      question: "Comment retourner un produit ?",
      answer: "Si vous n'êtes pas satisfait, vous pouvez retourner un produit dans les 14 jours suivant sa réception. Contactez-nous par email ou téléphone pour initier le processus de retour."
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">Questions fréquentes</h2>
      
      <Accordion className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
