import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProductCard } from '@/src/components/shared/ProductCard/ProductCard';
import { ProductCardTitle } from '@/src/components/shared/ProductCard/ProductCardTitle';
import { ProductCardPrice } from '@/src/components/shared/ProductCard/ProductCardPrice';
import { ProductCardImage } from '@/src/components/shared/ProductCard/ProductCardImage';

// Mock des images Next.js
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, fill, className }: any) => (
    <img src={src} alt={alt} className={className} data-testid="next-image" />
  ),
}));

describe('Simple ProductCard Tests', () => {
  // Produit minimal conforme à l'interface
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'Description',
    price: 29.99,
    imageUrl: '/placeholder-product.jpg',
    category: 'Test Category',
    isNew: true,
    isOnSale: false,
    stock: 10
  };

  it('should render the ProductCard with title', () => {
    render(
      <ProductCard product={mockProduct}>
        <ProductCardTitle />
      </ProductCard>
    );
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('should render the ProductCard with price', () => {
    render(
      <ProductCard product={mockProduct}>
        <ProductCardPrice />
      </ProductCard>
    );
    
    // Log pour voir le contenu réel
    screen.debug();
  });
});
