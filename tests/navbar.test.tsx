import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock du hook useNavbar pour éviter les dépendances sur next/navigation
jest.mock('@/src/components/layout/Navbar/useNavbar', () => ({
  useNavbar: () => ({
    routes: [
      { href: '/shop', label: 'BOUTIQUE' },
      { href: '/magazine', label: 'MAGAZINE' },
      { href: '/events', label: 'RENCONTRES' },
      { href: '/contact', label: 'CONTACT' },
    ],
    isActive: (path: string) => path === '/',
    pathname: '/',
    cartCount: 0
  })
}));

// Mock des composants mobiles pour tester leur présence plutôt que leur implémentation détaillée
jest.mock('@/src/components/layout/Navbar/NavbarMobileMenu', () => ({
  NavbarMobileMenu: () => <div data-testid="navbar-mobile-menu">Mobile Menu Mocked</div>
}));

// Importation des composants à tester
import { ComposedNavbar } from '@/src/components/layout/Navbar';

describe('Navbar', () => {
  test('devrait afficher la marque de la navbar', () => {
    render(<ComposedNavbar />);
    // Vérifie que le texte de la marque est affiché
    const brandElement = screen.getByText(/InHerbisVeritas/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('devrait afficher tous les liens de navigation', () => {
    render(<ComposedNavbar />);
    // Vérifie que tous les liens de navigation sont présents
    const boutiqueLink = screen.getByText('BOUTIQUE');
    const magazineLink = screen.getByText('MAGAZINE');
    const rencontresLink = screen.getByText('RENCONTRES');
    const contactLink = screen.getByText('CONTACT');

    expect(boutiqueLink).toBeInTheDocument();
    expect(magazineLink).toBeInTheDocument();
    expect(rencontresLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('devrait afficher les actions de la navbar', () => {
    render(<ComposedNavbar />);
    // Les actions contiennent des liens accessibles avec un nom
    const accountLink = screen.getByRole('link', { name: /account/i });
    const cartLink = screen.getByRole('link', { name: /cart/i });

    expect(accountLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });
});

describe('Menu Mobile', () => {
  test('devrait inclure le composant NavbarMobileMenu', () => {
    render(<ComposedNavbar />);
    
    // Vérifie que le composant NavbarMobileMenu est bien rendu
    const mobileMenu = screen.getByTestId('navbar-mobile-menu');
    expect(mobileMenu).toBeInTheDocument();
  });
});
