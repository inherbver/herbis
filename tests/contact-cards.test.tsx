import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactCards } from '@/src/components/contact/ContactCards';

// Mock pour navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn().mockImplementation(() => Promise.resolve())
  }
});

// Mock pour window.open
window.open = jest.fn();

// Mock pour les icônes Lucide qui sont utilisées dans le composant
jest.mock('lucide-react', () => ({
  MapPin: () => <div data-testid="map-pin-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  Copy: () => <div data-testid="copy-icon" />,
  ExternalLink: () => <div data-testid="external-link-icon" />
}));

// Mock du composant Button
jest.mock('@/src/components/ui/button', () => ({
  Button: ({ 
    children, 
    variant, 
    className, 
    onClick, 
    'aria-label': ariaLabel 
  }: { 
    children: React.ReactNode; 
    variant?: string; 
    className?: string; 
    onClick?: () => void;
    'aria-label'?: string;
  }) => (
    <button 
      onClick={onClick} 
      className={className}
      data-variant={variant}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}));

describe('ContactCards', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('rend correctement les sections de contact', () => {
    render(<ContactCards />);
    
    // Utiliser des sélecteurs plus flexibles pour trouver les éléments
    const phoneIcon = screen.getByTestId('phone-icon');
    const mailIcon = screen.getByTestId('mail-icon');
    const mapIcon = screen.getByTestId('map-pin-icon');
    
    // Vérifier que les icônes sont présentes
    expect(phoneIcon).toBeInTheDocument();
    expect(mailIcon).toBeInTheDocument();
    expect(mapIcon).toBeInTheDocument();
    
    // Vérifier les informations de contact
    expect(screen.getByText('+33 (0)1 23 45 67 89')).toBeInTheDocument();
    
    // Recherche de texte partiel au lieu du texte complet
    const emailElement = screen.getByText(/contact@inherbisveritas.fr/);
    expect(emailElement).toBeInTheDocument();
    
    const addressElement = screen.getByText(/25 rue des Plantes/);
    expect(addressElement).toBeInTheDocument();
  });

  test('permet de copier l\'email au clic sur le bouton approprié', () => {
    render(<ContactCards />);
    
    // Trouver le bouton qui contient l'icône de copie et cliquer dessus
    const copyIcons = screen.getAllByTestId('copy-icon');
    const copyButton = copyIcons[0].closest('button');
    
    if (copyButton) {
      fireEvent.click(copyButton);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('contact@inherbisveritas.fr');
    } else {
      // Si on ne trouve pas le bouton, le test doit échouer
      expect(copyButton).not.toBeNull();
    }
  });

  test('ouvre Google Maps au clic sur le bouton approprié', () => {
    render(<ContactCards />);
    
    // Trouver le bouton avec l'icône ExternalLink
    const externalLinkIcons = screen.getAllByTestId('external-link-icon');
    const mapButton = externalLinkIcons[0].closest('button');
    
    if (mapButton) {
      fireEvent.click(mapButton);
      expect(window.open).toHaveBeenCalledWith(
        'https://maps.google.com/?q=25+rue+des+Plantes+75014+Paris+France',
        '_blank'
      );
    } else {
      // Si on ne trouve pas le bouton, le test doit échouer
      expect(mapButton).not.toBeNull();
    }
  });

  test('affiche les informations de téléphone correctes', () => {
    render(<ContactCards />);
    
    expect(screen.getByText('+33 (0)1 23 45 67 89')).toBeInTheDocument();
    expect(screen.getByText(/Lundi - Vendredi: 9h00 - 18h00/)).toBeInTheDocument();
  });
});
