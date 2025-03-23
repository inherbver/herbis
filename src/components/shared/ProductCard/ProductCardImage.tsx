'use client';

import Image from 'next/image';
import { useProductCard } from './ProductCardContext';
import { cn } from '@/src/lib/utils';

interface ProductCardImageProps {
  className?: string;
  showBadges?: boolean;
}

export function ProductCardImage({ 
  className = '',
  showBadges = true 
}: ProductCardImageProps) {
  const { product } = useProductCard();
  
  return (
    <div className={cn('relative', className)}>
      <div className="h-48 w-full relative">
        <Image 
          src={product.imageUrl || '/placeholder-product.jpg'} 
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      {showBadges && (
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
              Nouveau
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
              -{product.discount}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}
