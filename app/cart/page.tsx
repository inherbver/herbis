"use client";

import React from 'react';
import { Button } from '@/src/components/ui/button';

// Dans une implémentation réelle, ce type serait dans un fichier distinct
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartPage() {
  // Simulation de données de panier
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: "prod-1",
      name: "Tisane Relaxante",
      price: 12.99,
      quantity: 2,
      image: "/placeholder-product.jpg"
    },
    {
      id: "prod-2",
      name: "Huile Essentielle de Lavande",
      price: 18.50,
      quantity: 1,
      image: "/placeholder-product.jpg"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-6">Votre panier est vide</p>
          <Button>Parcourir la boutique</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-4 border-b">
                  <div className="w-20 h-20 bg-gray-200 rounded mr-4">
                    {/* Image placeholder */}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Prix unitaire: {item.price.toFixed(2)} €</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md"
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-4 font-medium">
                    {(item.price * item.quantity).toFixed(2)} €
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span>Frais de livraison</span>
                <span>{shipping.toFixed(2)} €</span>
              </div>
              <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
            </div>
            
            <Button className="w-full">Passer à la caisse</Button>
          </div>
        </div>
      )}
    </div>
  );
}
