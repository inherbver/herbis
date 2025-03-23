'use client';

import { useProductCard } from './ProductCardContext';
import { cn } from '@/src/lib/utils';

interface ProductCardTitleProps {
  className?: string;
}

export function ProductCardTitle({ className = '' }: ProductCardTitleProps) {
  const { product } = useProductCard();
  
  return (
    <h3 className={cn('text-lg font-semibold mb-1 line-clamp-2', className)}>
      {product.name}
    </h3>
  );
}
