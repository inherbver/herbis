'use client';

import { useProductCard } from './ProductCardContext';
import { cn } from '@/src/lib/utils';

interface ProductCardCategoryProps {
  className?: string;
}

export function ProductCardCategory({ className = '' }: ProductCardCategoryProps) {
  const { product } = useProductCard();
  
  return (
    <span className={cn(
      'inline-block bg-muted text-muted-foreground text-xs font-medium px-2.5 py-0.5 rounded mb-2',
      className
    )}>
      {product.category}
    </span>
  );
}
