import React from 'react';
import { cn } from '@/src/lib/utils';
import { ProductCardProvider, Product } from './ProductCardContext';

interface ProductCardProps {
  product: Product;
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'horizontal';
  addToCart?: (product: Product) => void;
}

export function ProductCard({ 
  product, 
  className = '',
  children,
  variant = 'default',
  addToCart,
}: ProductCardProps) {
  return (
    <ProductCardProvider product={product} addToCart={addToCart}>
      <div 
        className={cn(
          'bg-card text-card-foreground rounded-lg shadow-md overflow-hidden',
          variant === 'horizontal' ? 'flex flex-row' : 'flex flex-col',
          className
        )}
      >
        {children}
      </div>
    </ProductCardProvider>
  );
}
