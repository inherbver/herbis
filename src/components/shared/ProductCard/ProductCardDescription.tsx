'use client';

import { useProductCard } from './ProductCardContext';
import { cn } from '@/src/lib/utils';

interface ProductCardDescriptionProps {
  className?: string;
  maxLines?: number;
}

export function ProductCardDescription({ 
  className = '',
  maxLines = 2
}: ProductCardDescriptionProps) {
  const { product } = useProductCard();
  
  return (
    <p className={cn(
      'text-sm text-muted-foreground mb-3',
      `line-clamp-${maxLines}`,
      className
    )}>
      {product.description}
    </p>
  );
}
