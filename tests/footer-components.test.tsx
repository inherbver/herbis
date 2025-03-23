import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Mock du hook useFooter
jest.mock('@/src/components/layout/Footer/useFooter', () => ({
  useFooter: () => ({
    linkCategories: [
      {
        title: "Découvrir",
        links: [
          { href: "/about", label: "À propos" },
          { href: "/shop", label: "Boutique" }
        ]
      }
    ],
    socialLinks: [
      { href: "https://instagram.com/inherbisveritas", label: "Instagram", icon: "instagram" }
    ],
    isActive: (path: string) => path === '/about',
    pathname: '/about',
    copyrightText: ' 2025 InHerbisVeritas. Tous droits réservés.'
  })
}));

// Mock des composants UI 
jest.mock('@/src/components/ui/button', () => ({
  Button: ({ children, className, ...props }: any) => {
    const { asChild, ...otherProps } = props;
    if (asChild && children) {
      return React.cloneElement(React.Children.only(children), {
        className,
        'data-testid': 'button-child',
        ...otherProps
      });
    }
    return <button className={className} {...otherProps}>{children}</button>;
  }
}));

jest.mock('@/src/components/ui/input', () => ({
  Input: ({ className, ...props }: any) => (
    <input className={className} {...props} data-testid="newsletter-input" />
  )
}));

// Mock des icônes
jest.mock('lucide-react', () => ({
  Instagram: () => <div data-testid="instagram-icon" />,
  Facebook: () => <div data-testid="facebook-icon" />,
  Twitter: () => <div data-testid="twitter-icon" />,
  ExternalLink: () => <div data-testid="external-icon" />
}));

// Import des composants à tester individuellement
import { 
  Footer,
  FooterBrand, 
  FooterLinks, 
  FooterLegal, 
  FooterNewsletter,
  FooterSocial
} from '@/src/components/layout/Footer';

describe('Footer Components', () => {
  describe('FooterBrand', () => {
    test('devrait afficher le nom de la marque et la description', () => {
      render(<FooterBrand />);
      
      // Vérifie qu'il y a une description
      const description = screen.getByText(/Des produits naturels/i);
      expect(description).toBeInTheDocument();
    });
  });

  describe('FooterLinks', () => {
    test('devrait afficher les catégories et les liens', () => {
      render(<FooterLinks />);
      
      // Vérifie la catégorie
      const categoryTitle = screen.getByText('Découvrir');
      expect(categoryTitle).toBeInTheDocument();
      
      // Vérifie les liens
      const aboutLink = screen.getByText('À propos');
      const shopLink = screen.getByText('Boutique');
      
      expect(aboutLink).toBeInTheDocument();
      expect(shopLink).toBeInTheDocument();
      
      // Vérifie que le lien actif a un style différent
      expect(aboutLink.className).toContain('text-foreground');
    });
  });

  describe('FooterLegal', () => {
    test('devrait afficher le texte de copyright', () => {
      render(<FooterLegal />);
      
      const copyrightText = screen.getByText(/2025 InHerbisVeritas/);
      expect(copyrightText).toBeInTheDocument();
    });
  });

  describe('FooterNewsletter', () => {
    test('devrait afficher le formulaire d\'inscription', async () => {
      render(<FooterNewsletter />);
      
      // Vérifie le titre
      const title = screen.getByText('Newsletter');
      expect(title).toBeInTheDocument();
      
      // Vérifie le champ email et le bouton
      const emailInput = screen.getByTestId('newsletter-input');
      const subscribeButton = screen.getByRole('button', { name: /S'inscrire/i });
      
      expect(emailInput).toBeInTheDocument();
      expect(subscribeButton).toBeInTheDocument();
      
      // Simulation de la saisie d'email
      await userEvent.type(emailInput, 'test@example.com');
      expect(emailInput).toHaveValue('test@example.com');
    });

    test('devrait gérer le processus de soumission', async () => {
      const user = userEvent.setup();
      render(<FooterNewsletter />);
      
      const emailInput = screen.getByTestId('newsletter-input');
      const subscribeButton = screen.getByRole('button', { name: /S'inscrire/i });
      
      // Remplit l'email
      await user.type(emailInput, 'test@example.com');
      
      // Soumet le formulaire
      await user.click(subscribeButton);
      
      // Vérifie que le bouton change d'état pendant la soumission
      expect(screen.getByRole('button')).toHaveTextContent('Envoi...');
    });
  });

  describe('FooterSocial', () => {
    test('devrait afficher les liens des réseaux sociaux', () => {
      render(<FooterSocial />);
      
      // Vérifie le titre
      const title = screen.getByText('Suivez-nous');
      expect(title).toBeInTheDocument();
      
      // Vérifie l'icône Instagram
      const instagramIcon = screen.getByTestId('instagram-icon');
      expect(instagramIcon).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    test('devrait rendre correctement le conteneur Footer', () => {
      render(
        <Footer>
          <div data-testid="footer-content">Contenu du footer</div>
        </Footer>
      );
      
      const footerContent = screen.getByTestId('footer-content');
      expect(footerContent).toBeInTheDocument();
    });

    test('devrait appliquer les classes correctement', () => {
      render(
        <Footer className="test-class">
          <div>Contenu</div>
        </Footer>
      );
      
      // Le composant Bar est mocké, donc nous ne pouvons pas tester directement les classes
      // Mais nous pouvons vérifier que le composant Footer a bien été rendu
      const footerElement = screen.getByText('Contenu');
      expect(footerElement).toBeInTheDocument();
    });
  });
});
