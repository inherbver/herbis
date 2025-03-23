'use client';

import { Button } from '@/src/components/ui/button';
import { useProductCard } from './ProductCardContext';
import { cn } from '@/src/lib/utils';

interface ProductCardActionsProps {
  className?: string;
}

export function ProductCardActions({ className = '' }: ProductCardActionsProps) {
  const { product, addToCart } = useProductCard();
  
  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product);
    }
  };
  
  return (
    <Button 
      onClick={handleAddToCart}
      size="sm"
      className={cn(className)}
      disabled={product.stock <= 0}
    >
      {product.stock > 0 ? 'Ajouter au panier' : 'Indisponible'}
    </Button>
  );
}
