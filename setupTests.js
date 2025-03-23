// Import des extensions Jest DOM pour les tests React
require('@testing-library/jest-dom');

// Configuration globale pour les tests
// Peut être étendu avec d'autres configurations au besoin

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
