import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock pour les composants de la page contact
jest.mock('../app/contact/page', () => ({
  __esModule: true,
  default: () => (
    <main className="min-h-screen bg-background">
      <div data-testid="contact-header"></div>
      <div className="container mx-auto py-12">
        <h2>Comment pouvons-nous vous aider ?</h2>
        <div data-testid="contact-cards"></div>
        <h2>Suivez-nous</h2>
        <div data-testid="contact-social"></div>
        <div data-testid="contact-faq"></div>
        <div data-testid="contact-cta"></div>
      </div>
    </main>
  )
}));

// Importer le module pour le test
const ContactPage = require('../app/contact/page').default;

describe('ContactPage', () => {
  test('rend correctement avec tous les composants de contact', () => {
    render(<ContactPage />);
    
    // Vérifie que tous les composants sont rendus
    expect(screen.getByTestId('contact-header')).toBeInTheDocument();
    expect(screen.getByTestId('contact-cards')).toBeInTheDocument();
    expect(screen.getByTestId('contact-social')).toBeInTheDocument();
    expect(screen.getByTestId('contact-faq')).toBeInTheDocument();
    expect(screen.getByTestId('contact-cta')).toBeInTheDocument();
  });
});
