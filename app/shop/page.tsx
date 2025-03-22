"use client";

import React from 'react';
import { Button } from '@/src/components/ui/button';

export default function ShopPage() {
  // Simulation de données de produits
  const products = [
    {
      id: "product-1",
      name: "Tisane Relaxante",
      description: "Mélange de plantes pour favoriser la détente et le sommeil",
      price: 12.99,
      imageUrl: "/placeholder-product.jpg",
      category: "Tisanes",
      stock: 15
    },
    {
      id: "product-2",
      name: "Huile Essentielle de Lavande",
      description: "100% pure et naturelle, pour diffusion ou application cutanée",
      price: 18.50,
      imageUrl: "/placeholder-product.jpg",
      category: "Huiles essentielles",
      stock: 8
    },
    {
      id: "product-3",
      name: "Infusion Digestive",
      description: "Favorise la digestion après les repas",
      price: 14.99,
      imageUrl: "/placeholder-product.jpg",
      category: "Tisanes",
      stock: 20
    },
    {
      id: "product-4",
      name: "Pack Découverte Plantes Médicinales",
      description: "Assortiment de 5 plantes médicinales communes",
      price: 24.99,
      imageUrl: "/placeholder-product.jpg",
      category: "Packs",
      stock: 5
    },
    {
      id: "product-5",
      name: "Onguent à l'Arnica",
      description: "Pour soulager les douleurs musculaires et articulaires",
      price: 16.75,
      imageUrl: "/placeholder-product.jpg",
      category: "Soins corporels",
      stock: 12
    },
    {
      id: "product-6",
      name: "Thé Vert Bio",
      description: "Riche en antioxydants, cultivé sans pesticides",
      price: 9.99,
      imageUrl: "/placeholder-product.jpg",
      category: "Thés",
      stock: 25
    }
  ];

  // Catégories pour le filtre
  const categories = ["Toutes", "Tisanes", "Huiles essentielles", "Thés", "Packs", "Soins corporels"];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Boutique</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filtres latéraux */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filtres</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Catégories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      id={`category-${category}`}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Prix</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="min-price" className="text-sm text-gray-600">Min €</label>
                  <input
                    type="number"
                    id="min-price"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label htmlFor="max-price" className="text-sm text-gray-600">Max €</label>
                  <input
                    type="number"
                    id="max-price"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Disponibilité</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="in-stock"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
                    En stock uniquement
                  </label>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6">Appliquer les filtres</Button>
          </div>
        </div>
        
        {/* Liste des produits */}
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} produits</p>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Trier par:</label>
              <select
                id="sort"
                className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
              >
                <option>Popularité</option>
                <option>Prix: croissant</option>
                <option>Prix: décroissant</option>
                <option>Nouveautés</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
                    <Button size="sm">Ajouter au panier</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium rounded-l-md text-gray-700 hover:bg-gray-50">
                Précédent
              </a>
              <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-green-600">
                1
              </a>
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium rounded-r-md text-gray-700 hover:bg-gray-50">
                Suivant
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
