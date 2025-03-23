import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactSocial } from '@/src/components/contact/ContactSocial';

// Mock pour les icônes Lucide
jest.mock('lucide-react', () => ({
  Facebook: () => <div data-testid="facebook-icon" />,
  Instagram: () => <div data-testid="instagram-icon" />,
  Twitter: () => <div data-testid="twitter-icon" />
}));

describe('ContactSocial', () => {
  test('rend correctement les liens sociaux', () => {
    render(<ContactSocial />);
    
    // Vérifie que les liens sont présents avec le bon texte
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  test('a les bonnes URLs pour chaque lien social', () => {
    render(<ContactSocial />);
    
    // Vérifie les URLs des liens
    const facebookLink = screen.getByText('Facebook').closest('a');
    const instagramLink = screen.getByText('Instagram').closest('a');
    const twitterLink = screen.getByText('Twitter').closest('a');
    
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com/inherbisveritas');
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/inherbisveritas');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/inherbisveritas');
  });

  test('inclut les attributs de sécurité et accessibilité pour les liens externes', () => {
    render(<ContactSocial />);
    
    // Récupère tous les liens
    const links = screen.getAllByRole('link');
    
    // Vérifie que chaque lien a les attributs target, rel et aria-label
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('aria-label');
    });
  });

  test('affiche les icônes des réseaux sociaux', () => {
    render(<ContactSocial />);
    
    // Vérifie la présence des icônes
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
  });
});
