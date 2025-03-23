import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { ProductCardProvider, useProductCard } from '@/src/components/shared/ProductCard/ProductCardContext';

// Composant de test pour vérifier le contexte
function TestComponent() {
  const { product, addToCart } = useProductCard();
  
  return (
    <div>
      <h1 data-testid="product-name">{product.name}</h1>
      <p data-testid="product-price">{product.price}</p>
      <button 
        onClick={() => addToCart && addToCart(product)}
        data-testid="add-button"
      >
        Ajouter au panier
      </button>
    </div>
  );
}

describe('ProductCardContext', () => {
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    slug: 'test-product',
    description: 'This is a test product description',
    price: 29.99,
    discount: undefined,
    category: 'Test Category',
    imageUrl: '/placeholder-product.jpg',
    isNew: true,
    isOnSale: false,
    stock: 10
  };

  it('should provide product data to consuming components', () => {
    render(
      <ProductCardProvider product={mockProduct}>
        <TestComponent />
      </ProductCardProvider>
    );
    
    expect(screen.getByTestId('product-name')).toHaveTextContent('Test Product');
    expect(screen.getByTestId('product-price')).toHaveTextContent('29.99');
  });

  it('should call addToCart function when triggered', async () => {
    const handleAddToCart = jest.fn();
    const user = userEvent.setup();
    
    render(
      <ProductCardProvider product={mockProduct} addToCart={handleAddToCart}>
        <TestComponent />
      </ProductCardProvider>
    );
    
    const addButton = screen.getByTestId('add-button');
    await user.click(addButton);
    
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('should not throw error when addToCart is not provided', async () => {
    const user = userEvent.setup();
    
    render(
      <ProductCardProvider product={mockProduct}>
        <TestComponent />
      </ProductCardProvider>
    );
    
    const addButton = screen.getByTestId('add-button');
    
    // Vérifier que le clic ne cause pas d'erreur lorsque addToCart n'est pas fourni
    await expect(user.click(addButton)).resolves.not.toThrow();
  });

  it('should throw error when used outside of ProductCardProvider', () => {
    // Masquer les erreurs de console pour ce test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow();
    
    // Restaurer le console.error d'origine
    consoleSpy.mockRestore();
  });
});
