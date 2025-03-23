import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from '@/app/contact/page';

// Mock pour les composants de contact pour éviter les erreurs d'importation circulaires
jest.mock('@/src/components/contact/ContactHeader', () => ({
  ContactHeader: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="contact-header">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}));

jest.mock('@/src/components/contact/ContactCards', () => ({
  ContactCards: () => <div data-testid="contact-cards">Contact Cards Component</div>
}));

jest.mock('@/src/components/contact/ContactSocial', () => ({
  ContactSocial: () => <div data-testid="contact-social">Contact Social Component</div>
}));

jest.mock('@/src/components/contact/ContactFAQ', () => ({
  ContactFAQ: () => <div data-testid="contact-faq">Contact FAQ Component</div>
}));

jest.mock('@/src/components/contact/ContactCTA', () => ({
  ContactCTA: () => <div data-testid="contact-cta">Contact CTA Component</div>
}));

// Mock pour les icônes
jest.mock('lucide-react', () => ({
  Facebook: () => <div data-testid="facebook-icon" />,
  Instagram: () => <div data-testid="instagram-icon" />,
  Twitter: () => <div data-testid="twitter-icon" />,
  Copy: () => <div data-testid="copy-icon" />,
  ExternalLink: () => <div data-testid="external-link-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  MapPin: () => <div data-testid="map-pin-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />
}));

describe('Contact Page (Integration)', () => {
  test('page de contact complète rend correctement tous les composants', () => {
    render(<ContactPage />);
    
    // Vérifier que tous les composants sont présents
    expect(screen.getByTestId('contact-header')).toBeInTheDocument();
    expect(screen.getByTestId('contact-cards')).toBeInTheDocument();
    expect(screen.getByTestId('contact-social')).toBeInTheDocument();
    expect(screen.getByTestId('contact-faq')).toBeInTheDocument();
    expect(screen.getByTestId('contact-cta')).toBeInTheDocument();
  });
  
  test('affiche le titre et la description de l\'en-tête corrects', () => {
    render(<ContactPage />);
    
    expect(screen.getByText('Contactez-nous')).toBeInTheDocument();
    expect(screen.getByText(/Nous sommes à votre écoute/)).toBeInTheDocument();
  });

  test('a les bonnes sections avec leur titre', () => {
    render(<ContactPage />);
    
    expect(screen.getByText('Comment pouvons-nous vous aider ?')).toBeInTheDocument();
    expect(screen.getByText('Suivez-nous')).toBeInTheDocument();
    expect(screen.getByText('Questions fréquentes')).toBeInTheDocument();
  });
});
