'use client';

import React, { createContext, useContext } from 'react';

// Interface du produit
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  discount?: number;
  stock: number;
}

// Interface du contexte
interface ProductCardContextType {
  product: Product;
  addToCart?: (product: Product) => void;
}

// Création du contexte
export const ProductCardContext = createContext<ProductCardContextType | undefined>(undefined);

// Hook pour utiliser le contexte
export function useProductCard() {
  const context = useContext(ProductCardContext);
  if (!context) {
    throw new Error('useProductCard doit être utilisé dans un ProductCardProvider');
  }
  return context;
}

// Props du Provider
interface ProductCardProviderProps {
  product: Product;
  addToCart?: (product: Product) => void;
  children: React.ReactNode;
}

// Provider Component
export function ProductCardProvider({ product, addToCart, children }: ProductCardProviderProps) {
  return (
    <ProductCardContext.Provider value={{ product, addToCart }}>
      {children}
    </ProductCardContext.Provider>
  );
}
