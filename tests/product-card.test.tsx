import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Mock des images Next.js
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, fill, className }: any) => (
    <img src={src} alt={alt} className={className} data-testid="next-image" />
  ),
}));

// Données de test
const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'This is a test product description',
  price: 29.99,
  category: 'Test Category',
  imageUrl: '/placeholder-product.jpg',
  isNew: true,
  isOnSale: false,
  stock: 10
};

const mockDiscountProduct = {
  id: '2',
  name: 'Discount Product',
  description: 'This is a discount product',
  price: 19.99,
  discount: 33,
  category: 'Test Category',
  imageUrl: '/placeholder-product.jpg',
  isNew: false,
  isOnSale: true,
  stock: 5
};

// Import des composants à tester
import { 
  ProductCard, 
  ProductCardTitle,
  ProductCardPrice,
  ProductCardDescription,
  ProductCardImage,
  ProductCardActions,
  ProductCardCategory,
  ComposedProductCard
} from '@/src/components/shared/ProductCard';

describe('ProductCard Components', () => {
  describe('ComposedProductCard', () => {
    it('renders with product information', () => {
      render(<ComposedProductCard product={mockProduct} />);
      
      // Vérifier les informations de base
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('Test Category')).toBeInTheDocument();
      expect(screen.getByTestId('next-image')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onAddToCart when button is clicked', async () => {
      const handleAddToCart = jest.fn();
      const user = userEvent.setup();
      
      render(
        <ComposedProductCard 
          product={mockProduct} 
          onAddToCart={handleAddToCart} 
        />
      );
      
      await user.click(screen.getByRole('button'));
      expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
    });
  });

  describe('Individual Components', () => {
    it('renders ProductCardTitle correctly', () => {
      render(
        <ProductCard product={mockProduct}>
          <ProductCardTitle />
        </ProductCard>
      );
      
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    it('renders ProductCardPrice correctly', () => {
      render(
        <ProductCard product={mockProduct}>
          <ProductCardPrice />
        </ProductCard>
      );
      
      expect(screen.getByText(/29\.99/)).toBeInTheDocument();
    });
    
    it('renders ProductCardDescription correctly', () => {
      render(
        <ProductCard product={mockProduct}>
          <ProductCardDescription />
        </ProductCard>
      );
      
      expect(screen.getByText('This is a test product description')).toBeInTheDocument();
    });
    
    it('renders ProductCardImage correctly', () => {
      render(
        <ProductCard product={mockProduct}>
          <ProductCardImage />
        </ProductCard>
      );
      
      expect(screen.getByTestId('next-image')).toBeInTheDocument();
    });
    
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
  });
});
