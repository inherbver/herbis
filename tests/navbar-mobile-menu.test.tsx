import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

// Mock des composants UI pour faciliter les tests
jest.mock('@/src/components/ui', () => {
  return {
    Sheet: ({ children, open, onOpenChange }: any) => (
      <div data-testid="sheet" data-open={open} onClick={() => onOpenChange && onOpenChange(!open)}>
        {children}
      </div>
    ),
    SheetTrigger: ({ children }: any) => (
      <div data-testid="sheet-trigger">
        {children}
      </div>
    ),
    SheetContent: ({ children, className }: any) => (
      <div data-testid="sheet-content" className={className}>
        {children}
      </div>
    ),
    Button: ({ children, className, onClick }: any) => (
      <button 
        data-testid="menu-button"
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    )
  };
});

// Mock de l'icône Menu
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />
}));

// Importation du composant à tester
import { NavbarMobileMenu } from '@/src/components/layout/Navbar/NavbarMobileMenu';

describe('NavbarMobileMenu', () => {
  test('devrait rendre le bouton de menu avec l\'icône et le texte sr-only', () => {
    render(<NavbarMobileMenu />);
    
    // Vérifie la présence du bouton
    const menuButton = screen.getByTestId('menu-button');
    expect(menuButton).toBeInTheDocument();
    
    // Vérifie la présence de l'icône
    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();
    
    // Vérifie le texte sr-only
    const srOnlyText = screen.getByText('Menu');
    expect(srOnlyText).toBeInTheDocument();
    expect(srOnlyText).toHaveClass('sr-only');
  });

  test('devrait afficher le Sheet avec la classe MD:hidden', () => {
    render(<NavbarMobileMenu />);
    
    // Vérifie que le Sheet est présent et contient la classe md:hidden
    const sheet = screen.getByTestId('sheet');
    expect(sheet).toBeInTheDocument();
    
    // Vérifie que le conteneur a la classe md:hidden pour la responsive
    const container = sheet.parentElement;
    expect(container).toHaveClass('md:hidden');
  });

  test('devrait afficher tous les liens de navigation dans le SheetContent', () => {
    render(<NavbarMobileMenu />);
    
    // Vérifie le contenu du SheetContent
    const sheetContent = screen.getByTestId('sheet-content');
    expect(sheetContent).toBeInTheDocument();
    expect(sheetContent).toHaveClass('bg-neutral-100');
    
    // Vérifie la présence des liens de navigation
    const boutiqueLink = screen.getByText('BOUTIQUE');
    const magazineLink = screen.getByText('MAGAZINE');
    const rencontresLink = screen.getByText('RENCONTRES');
    const contactLink = screen.getByText('CONTACT');
    
    expect(boutiqueLink).toBeInTheDocument();
    expect(magazineLink).toBeInTheDocument();
    expect(rencontresLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('devrait appliquer les styles corrects aux liens de navigation', () => {
    render(<NavbarMobileMenu />);
    
    const boutiqueLink = screen.getByText('BOUTIQUE');
    
    // Vérifie les classes communes
    expect(boutiqueLink).toHaveClass('text-lg');
    expect(boutiqueLink).toHaveClass('uppercase');
    expect(boutiqueLink).toHaveClass('font-medium');
    expect(boutiqueLink).toHaveClass('tracking-wide');
    
    // Pour un lien inactif
    expect(boutiqueLink).toHaveClass('text-primary-500');
    expect(boutiqueLink).toHaveClass('pl-4');
  });
});
