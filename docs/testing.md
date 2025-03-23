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

### Exemple pour la Navbar

```
tests/
  ├── navbar.test.tsx           # Tests pour le composant ComposedNavbar
  └── navbar-mobile-menu.test.tsx  # Tests pour le composant NavbarMobileMenu
```

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
