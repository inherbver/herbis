import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProductCard } from '@/src/components/shared/ProductCard/ProductCard';
import { ProductCardPrice } from '@/src/components/shared/ProductCard/ProductCardPrice';
import { ComposedProductCard } from '@/src/components/shared/ProductCard/ComposedProductCard';

// Mock des images Next.js
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, fill, className }: any) => (
    <img src={src} alt={alt} className={className} data-testid="next-image" />
  ),
}));

// Données de test
const mockDiscountProduct = {
  id: '2',
  name: 'Discount Product',
  description: 'This is a test product description',
  price: 19.99, // Prix déjà réduit
  discount: 33, // 33% de réduction
  category: 'Test Category',
  imageUrl: '/placeholder-product.jpg',
  isNew: false,
  isOnSale: true,
  stock: 5
};

describe('Debug ProductCard Components', () => {
  it('should show the actual DOM structure of price components', () => {
    // Rendu du composant individuel
    render(
      <ProductCard product={mockDiscountProduct}>
        <ProductCardPrice />
      </ProductCard>
    );
    
    // Afficher le DOM pour debug
    console.log('--- Individual Price Component ---');
    screen.debug();
    
    // Nettoyer le DOM
    cleanup();
    
    // Rendu du composant complet
    render(
      <ComposedProductCard product={mockDiscountProduct} />
    );
    
    console.log('--- Composed Product Card ---');
    screen.debug();
    
    // Test qui réussit toujours pour avoir un rapport
    expect(true).toBe(true);
  });
});
