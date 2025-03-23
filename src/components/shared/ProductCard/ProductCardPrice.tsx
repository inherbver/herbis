'use client';

import { useProductCard } from './ProductCardContext';
import { cn } from '@/src/lib/utils';

interface ProductCardPriceProps {
  className?: string;
  showDiscount?: boolean;
}

export function ProductCardPrice({ 
  className = '',
  showDiscount = true 
}: ProductCardPriceProps) {
  const { product } = useProductCard();
  
  const formattedPrice = `${product.price.toFixed(2)} €`;
  const hasDiscount = product.isOnSale && product.discount;
  
  const originalPrice = hasDiscount 
    ? (product.price / (1 - product.discount! / 100)).toFixed(2) 
    : null;
  
  return (
    <div className={cn('flex items-end gap-2', className)}>
      <span className="text-lg font-bold">
        {formattedPrice}
      </span>
      
      {showDiscount && hasDiscount && (
        <span className="text-sm text-muted-foreground line-through">
          {originalPrice} €
        </span>
      )}
    </div>
  );
}
