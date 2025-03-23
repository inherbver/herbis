# Guide des tests unitaires pour InHerbisVeritas

Ce document explique comment les tests unitaires sont configurés et organisés dans le projet InHerbisVeritas.

## Configuration de l'environnement de test

### Dépendances principales

```json
{
  "jest": "^29.7.0",
  "ts-jest": "^29.2.6",
  "jest-environment-jsdom": "^29.7.0",
  "@testing-library/react": "^16.2.0",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/user-event": "^14.5.2",
  "@types/jest": "^29.5.14",
  "identity-obj-proxy": "^3.0.0"
}
```

### Configuration Jest

Le fichier `jest.config.js` définit les paramètres pour l'exécution des tests :

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json'
    }]
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
```

Le fichier `setupTests.js` contient la configuration globale pour les tests, notamment les imports pour Jest DOM et les mocks pour Next.js :

```javascript
// Import des extensions Jest DOM pour les tests React
require('@testing-library/jest-dom');

// Mock pour next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn()
  }),
  useSearchParams: () => ({
    get: () => null
  })
}));
```

## Structure des tests

Les tests sont organisés dans le dossier `tests/` à la racine du projet. Nous suivons une convention de nommage où chaque fichier de test est nommé selon le composant testé avec le suffixe `.test.tsx`.

### Exemples de fichiers de test

```
tests/
  ├── navbar.test.tsx               # Tests pour le composant ComposedNavbar
  ├── navbar-mobile-menu.test.tsx   # Tests pour le composant NavbarMobileMenu
  ├── footer.test.tsx               # Tests pour le composant ComposedFooter
  ├── footer-components.test.tsx    # Tests individuels pour les composants du Footer
  ├── contact-header.test.tsx       # Tests pour le composant ContactHeader
  ├── contact-cards.test.tsx        # Tests pour le composant ContactCards
  ├── contact-social.test.tsx       # Tests pour le composant ContactSocial
  ├── contact-faq.test.tsx          # Tests pour le composant ContactFAQ
  ├── contact-cta.test.tsx          # Tests pour le composant ContactCTA
  └── contact-page.test.tsx         # Tests pour la page de contact
```

### Composants testés

#### Navbar
- `ComposedNavbar` - Le composant assemblé de la barre de navigation
- `NavbarMobileMenu` - Le menu mobile de la navbar
- Autres sous-composants

#### Footer
- `ComposedFooter` - Le composant assemblé du pied de page
- `Footer` - Le composant de base
- `FooterBrand` - Le composant pour le logo et la description de l'entreprise
- `FooterLinks` - Le composant pour les liens organisés par catégories
- `FooterLegal` - Le composant pour les informations légales et le copyright
- `FooterNewsletter` - Le composant pour le formulaire d'inscription à la newsletter
- `FooterSocial` - Le composant pour les liens vers les réseaux sociaux

#### ProductCard et sous-composants
- `ProductCard` - Le composant de base qui fournit le contexte aux sous-composants
- `ProductCardContext` - Le contexte partagé qui gère les données du produit
- `ProductCardTitle` - Le composant pour afficher le titre du produit
- `ProductCardDescription` - Le composant pour afficher la description du produit
- `ProductCardPrice` - Le composant pour afficher le prix (normal et en promotion)
- `ProductCardImage` - Le composant pour afficher l'image et les badges (nouveau, promotion)
- `ProductCardActions` - Le composant pour les boutons d'action (ajouter au panier)
- `ProductCardCategory` - Le composant pour afficher la catégorie du produit
- `ComposedProductCard` - Le composant client qui assemble tous les sous-composants

#### Contact
- `ContactHeader` - L'en-tête de la page contact avec titre et description
- `ContactCards` - Les cartes d'informations de contact (téléphone, email, adresse)
- `ContactSocial` - Les liens vers les réseaux sociaux
- `ContactFAQ` - Le composant d'accordéon pour les questions fréquentes
- `ContactCTA` - Le call-to-action pour diriger les utilisateurs vers la boutique ou les articles

## Mocks

Pour isoler les composants pendant les tests, nous utilisons plusieurs types de mocks :

### 1. Mocks de hooks

```typescript
// Mock du hook useNavbar
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

// Mock du hook useFooter
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
```

### 2. Mocks de composants

```typescript
// Mock d'un composant entier
jest.mock('@/src/components/layout/Navbar/NavbarMobileMenu', () => ({
  NavbarMobileMenu: () => <div data-testid="navbar-mobile-menu">Mobile Menu Mocked</div>
}));

// Mock de composants UI
jest.mock('@/src/components/ui', () => {
  return {
    Sheet: ({ children, open, onOpenChange }: any) => (
      <div data-testid="sheet" data-open={open}>{children}</div>
    ),
    // Autres composants...
  };
});
```

### 3. Mocks d'icônes et ressources statiques

```typescript
// Mock d'icônes
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />
}));

// Les fichiers statiques sont gérés par le fileMock.js
// __mocks__/fileMock.js contient : module.exports = 'test-file-stub';
```

## Exécution des tests

Pour exécuter tous les tests du projet :

```bash
npm test
```

Pour exécuter un fichier de test spécifique :

```bash
npm test -- tests/navbar.test.tsx
```

Pour exécuter les tests en mode watch (mise à jour automatique) :

```bash
npm test -- --watch
```

## Stratégies de test

### 1. Test de rendu des composants

```typescript
test('devrait afficher la marque de la navbar', () => {
  render(<ComposedNavbar />);
  const brandElement = screen.getByText(/InHerbisVeritas/i);
  expect(brandElement).toBeInTheDocument();
});
```

### 2. Test de présence d'éléments

```typescript
test('devrait afficher tous les liens de navigation', () => {
  render(<ComposedNavbar />);
  const boutiqueLink = screen.getByText('BOUTIQUE');
  const magazineLink = screen.getByText('MAGAZINE');
  
  expect(boutiqueLink).toBeInTheDocument();
  expect(magazineLink).toBeInTheDocument();
});
```

### 3. Test d'attributs et de classes

```typescript
test('devrait rendre le contenu du Sheet correctement', () => {
  render(<NavbarMobileMenu />);
  const sheetContent = screen.getByTestId('sheet-content');
  
  expect(sheetContent).toHaveClass('bg-neutral-100');
  expect(sheetContent).toHaveClass('border-l');
});
```

### 4. Test d'interactions utilisateur

```typescript
test('devrait ouvrir le menu quand on clique sur le bouton', async () => {
  render(<NavbarMobileMenu />);
  const user = userEvent.setup();
  
  const menuButton = screen.getByRole('button');
  await user.click(menuButton);
  
  const sheet = screen.getByTestId('sheet');
  expect(sheet).toHaveAttribute('data-open', 'true');
});
```

## Exemples de tests pour le Footer

### 1. Test de rendu du composant assemblé

```typescript
// Dans footer.test.tsx
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
    
    expect(aboutLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
  });
});
```

### 2. Test des composants individuels

```typescript
// Dans footer-components.test.tsx
describe('FooterNewsletter', () => {
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
```

## Tests des cartes produits

### Structure des tests ProductCard

```
tests/
  ├── product-card.test.tsx             # Tests pour ProductCard et ses sous-composants
  └── product-card-context.test.tsx     # Tests pour le contexte ProductCardContext
```

### Comportements testés

Pour `ProductCardContext` :
- Fournir correctement les données du produit aux composants enfants
- Transmettre correctement la fonction d'ajout au panier
- Gérer les produits avec et sans remises

Pour `ProductCard` et ses sous-composants :
- Affichage correct des informations du produit (titre, description, catégorie, etc.)
- Calcul et affichage corrects des prix (normal et réduit)
- Gestion correcte des badges "Nouveau" et "Promotion"
- Réponse appropriée aux clics sur le bouton d'ajout au panier
- Affichage correct des différentes variantes (default, horizontal)

### Technique de test

Les tests utilisent une approche modulaire où les composants sont testés individuellement puis dans leur version composée. Des mocks sont utilisés pour :
- Simuler les images Next.js
- Simuler les fonctions de callback comme `addToCart`

Exemple de test pour les composants ProductCard :

```tsx
// Test du composant ComposedProductCard
it('renders with product information', () => {
  render(<ComposedProductCard product={mockProduct} />);
  
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('Test Category')).toBeInTheDocument();
  expect(screen.getByTestId('next-image')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

// Test du composant ProductCardActions avec callback
it('renders ProductCardActions with functional button', async () => {
  const handleAddToCart = jest.fn();
  const user = userEvent.setup();
  
  render(
    <ProductCard product={mockProduct} addToCart={handleAddToCart}>
      <ProductCardActions />
    </ProductCard>
  );
  
  await user.click(screen.getByRole('button'));
  expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
});
```

Ces tests garantissent que les composants ProductCard fonctionnent correctement de manière isolée et composée, validant ainsi le pattern de composants composables.

## Tests des composants de contact

### Structure des tests Contact

```
tests/
  ├── contact-header.test.tsx       # Tests pour le composant ContactHeader
  ├── contact-cards.test.tsx        # Tests pour le composant ContactCards
  ├── contact-social.test.tsx       # Tests pour le composant ContactSocial
  ├── contact-faq.test.tsx          # Tests pour le composant ContactFAQ
  ├── contact-cta.test.tsx          # Tests pour le composant ContactCTA
  └── contact-page.test.tsx         # Tests pour la page de contact
```

### Comportements testés

- Affichage correct des informations de contact
- Fonctionnement correct des liens de contact
- Affichage correct des réseaux sociaux
- Fonctionnement correct de l'accordéon des questions fréquentes
- Affichage correct du call-to-action

### Technique de test

Les tests utilisent une approche modulaire où les composants sont testés individuellement puis dans leur version composée. Des mocks sont utilisés pour :
- Simuler les données de contact
- Simuler les fonctions de callback comme `handleClick`

Exemple de test pour les composants Contact :

```tsx
// Test du composant ContactHeader
it('renders with contact information', () => {
  render(<ContactHeader />);
  
  expect(screen.getByText('Contactez-nous')).toBeInTheDocument();
  expect(screen.getByText('Adresse')).toBeInTheDocument();
  expect(screen.getByText('Téléphone')).toBeInTheDocument();
  expect(screen.getByText('Email')).toBeInTheDocument();
});

// Test du composant ContactCards
it('renders with contact cards', () => {
  render(<ContactCards />);
  
  expect(screen.getByText('Card 1')).toBeInTheDocument();
  expect(screen.getByText('Card 2')).toBeInTheDocument();
  expect(screen.getByText('Card 3')).toBeInTheDocument();
});
```

Ces tests garantissent que les composants de contact fonctionnent correctement de manière isolée et composée, validant ainsi le pattern de composants composables.

## Bonnes pratiques

1. **Isolation des tests** : Utilisez des mocks pour isoler le composant testé.
2. **Tests ciblés** : Chaque test devrait vérifier une seule fonctionnalité ou comportement.
3. **Assertions explicites** : Utilisez des fonctions d'assertion claires et précises.
4. **Sélection par accessibilité** : Privilégiez `getByRole`, `getByLabelText` sur `getByTestId` quand possible.
5. **Tests de régression** : Ajoutez des tests quand vous corrigez un bug pour éviter qu'il ne réapparaisse.

## Comment ajouter de nouveaux tests

1. Créez un fichier de test pour votre composant dans le dossier `tests/`.
2. Importez votre composant et les utilitaires de test nécessaires.
3. Mockez les dépendances externes pour isoler le composant.
4. Écrivez vos cas de test en utilisant `describe` et `test`.
5. Exécutez vos tests avec `npm test`.

## Ressources utiles

- [Documentation de Jest](https://jestjs.io/docs/getting-started)
- [Documentation de React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Documentation de user-event](https://testing-library.com/docs/user-event/intro)

## Données de test

Les données de test sont utilisées pour simuler les données réelles dans les tests. Elles peuvent être des objets, des tableaux ou des valeurs simples. Il est important de garder ces données de test séparées des données réelles pour éviter toute confusion ou contamination.

```typescript
// Exemple de données de test pour un produit
const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'Description du produit',
  price: 19.99,
  category: 'Test Category',
  image: '/path/to/image.jpg',
};
```

Ces données de test peuvent être utilisées dans les tests pour simuler les données réelles et vérifier le comportement des composants.

```tsx
// Exemple d'utilisation des données de test dans un test
it('renders with product information', () => {
  render(<ComposedProductCard product={mockProduct} />);
  
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('Test Category')).toBeInTheDocument();
  expect(screen.getByTestId('next-image')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
