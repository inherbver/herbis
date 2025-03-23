import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Mock du hook useFooter pour éviter les dépendances externes
jest.mock('@/src/components/layout/Footer/useFooter', () => ({
  useFooter: () => ({
    linkCategories: [
      {
        title: "Découvrir",
        links: [
          { href: "/about", label: "À propos" },
          { href: "/shop", label: "Boutique" },
        ]
      },
      {
        title: "Informations",
        links: [
          { href: "/contact", label: "Contact" },
          { href: "/faq", label: "FAQ" },
        ]
      }
    ],
    socialLinks: [
      { href: "https://instagram.com/inherbisveritas", label: "Instagram", icon: "instagram" },
      { href: "https://facebook.com/inherbisveritas", label: "Facebook", icon: "facebook" },
    ],
    isActive: (path: string) => path === '/about',
    pathname: '/about',
    copyrightText: ' 2025 InHerbisVeritas. Tous droits réservés.'
  })
}));

// Mock des composants UI pour simplifier les tests
jest.mock('@/src/components/ui/button', () => ({
  Button: ({ children, className, asChild, ...props }: any) => {
    if (asChild) {
      return React.cloneElement(React.Children.only(children), {
        className,
        'data-testid': 'button-child',
        ...props
      });
    }
    return <button className={className} {...props}>{children}</button>;
  }
}));

jest.mock('@/src/components/ui/input', () => ({
  Input: ({ className, ...props }: any) => (
    <input className={className} {...props} />
  )
}));

// Mock des icônes pour simplifier les tests
jest.mock('lucide-react', () => ({
  Instagram: () => <div data-testid="instagram-icon" />,
  Facebook: () => <div data-testid="facebook-icon" />,
  Twitter: () => <div data-testid="twitter-icon" />,
  ExternalLink: () => <div data-testid="external-icon" />
}));

// Import des composants à tester
import { ComposedFooter } from '@/src/components/layout/Footer';

describe('ComposedFooter', () => {
  test('devrait afficher la marque du footer', () => {
    render(<ComposedFooter />);
    const brandElement = screen.getByText(/produits naturels/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('devrait afficher les catégories de liens et leurs liens', () => {
    render(<ComposedFooter />);
    
    // Vérifie les titres de catégorie
    const decouvrirTitle = screen.getByText('Découvrir');
    const informationsTitle = screen.getByText('Informations');
    
    expect(decouvrirTitle).toBeInTheDocument();
    expect(informationsTitle).toBeInTheDocument();
    
    // Vérifie les liens dans chaque catégorie
    const aboutLink = screen.getByText('À propos');
    const shopLink = screen.getByText('Boutique');
    const contactLink = screen.getByText('Contact');
    const faqLink = screen.getByText('FAQ');
    
    expect(aboutLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
    
    // Vérifie que le lien actif a un style différent
    expect(aboutLink.className).toContain('text-foreground');
  });

  test('devrait afficher la section newsletter', () => {
    render(<ComposedFooter />);
    
    // Vérifie le titre de la newsletter
    const newsletterTitle = screen.getByText('Newsletter');
    expect(newsletterTitle).toBeInTheDocument();
    
    // Vérifie le champ email et le bouton d'inscription
    const emailInput = screen.getByPlaceholderText('Votre email');
    const subscribeButton = screen.getByRole('button', { name: /S'inscrire/i });
    
    expect(emailInput).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  });

  test('devrait afficher les liens sociaux', () => {
    render(<ComposedFooter />);
    
    // Vérifie le titre de la section
    const socialTitle = screen.getByText('Suivez-nous');
    expect(socialTitle).toBeInTheDocument();
    
    // Vérifie les icônes des réseaux sociaux
    const instagramIcon = screen.getByTestId('instagram-icon');
    const facebookIcon = screen.getByTestId('facebook-icon');
    
    expect(instagramIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
  });

  test('devrait afficher les mentions légales et le copyright', () => {
    render(<ComposedFooter />);
    
    // Vérifie le texte de copyright
    const copyrightText = screen.getByText(/2025 InHerbisVeritas/);
    expect(copyrightText).toBeInTheDocument();
  });
});
