import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactFAQ } from '@/src/components/contact/ContactFAQ';

// Mock pour le composant Accordion
jest.mock('@/src/components/ui', () => ({
  Accordion: ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
    <div data-testid="accordion" className={className}>{children}</div>
  ),
  AccordionItem: ({ children, value }: React.PropsWithChildren<{ value: string }>) => (
    <div data-testid="accordion-item" data-value={value}>{children}</div>
  ),
  AccordionTrigger: ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
    <button data-testid="accordion-trigger" className={className}>{children}</button>
  ),
  AccordionContent: ({ children }: React.PropsWithChildren<{}>) => (
    <div data-testid="accordion-content">{children}</div>
  )
}));

describe('ContactFAQ', () => {
  test('rend correctement le titre de la section', () => {
    render(<ContactFAQ />);
    
    expect(screen.getByText('Questions fréquentes')).toBeInTheDocument();
  });

  test('rend le bon nombre de questions dans l\'accordéon', () => {
    render(<ContactFAQ />);
    
    // Vérifie qu'il y a 5 questions
    const triggers = screen.getAllByTestId('accordion-trigger');
    expect(triggers).toHaveLength(5);
  });

  test('affiche les questions attendues', () => {
    render(<ContactFAQ />);
    
    // Vérifie la présence de quelques questions spécifiques
    expect(screen.getByText('Comment passer une commande ?')).toBeInTheDocument();
    expect(screen.getByText('Quels sont les délais de livraison ?')).toBeInTheDocument();
    expect(screen.getByText('Les produits sont-ils certifiés biologiques ?')).toBeInTheDocument();
    expect(screen.getByText('Proposez-vous des échantillons ?')).toBeInTheDocument();
    expect(screen.getByText('Comment retourner un produit ?')).toBeInTheDocument();
  });

  test('affiche les réponses aux questions', () => {
    render(<ContactFAQ />);
    
    // Vérifie la présence d'une partie du contenu des réponses
    expect(screen.getByText(/Vous pouvez passer commande directement sur notre site web/)).toBeInTheDocument();
    expect(screen.getByText(/Nos produits sont généralement expédiés sous 24 à 48 heures/)).toBeInTheDocument();
    expect(screen.getByText(/tous nos produits sont certifiés biologiques par Ecocert/)).toBeInTheDocument();
  });

  test('utilise le composant Accordion correctement', () => {
    render(<ContactFAQ />);
    
    // Vérifie que l'accordéon est bien présent
    expect(screen.getByTestId('accordion')).toBeInTheDocument();
    
    // Vérifie que les éléments de l'accordéon ont les bonnes valeurs
    const items = screen.getAllByTestId('accordion-item');
    expect(items[0]).toHaveAttribute('data-value', 'faq-0');
    expect(items[1]).toHaveAttribute('data-value', 'faq-1');
  });
});
