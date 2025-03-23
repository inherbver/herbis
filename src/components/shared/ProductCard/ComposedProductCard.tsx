'use client';

import { ProductCard } from './ProductCard';
import { ProductCardImage } from './ProductCardImage';
import { ProductCardCategory } from './ProductCardCategory';
import { ProductCardTitle } from './ProductCardTitle';
import { ProductCardDescription } from './ProductCardDescription';
import { ProductCardPrice } from './ProductCardPrice';
import { ProductCardActions } from './ProductCardActions';
import type { Product } from './ProductCardContext';

interface ComposedProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
  variant?: 'default' | 'horizontal';
}

export function ComposedProductCard({
  product,
  onAddToCart,
  className = '',
  variant = 'default',
}: ComposedProductCardProps) {
  return (
    <ProductCard 
      product={{...product}}
      className={className}
      variant={variant}
      addToCart={onAddToCart}
    >
      <ProductCardImage />
      
      <div className="p-4 flex flex-col min-h-[180px] h-full">
        <div className="flex-grow">
          <ProductCardCategory />
          <ProductCardTitle />
          <ProductCardDescription maxLines={2} />
        </div>
        
        <div className="mt-auto pt-2 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <ProductCardPrice />
            <ProductCardActions />
          </div>
        </div>
      </div>
    </ProductCard>
  );
}
