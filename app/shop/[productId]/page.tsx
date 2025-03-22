"use client";

import React from 'react';
import { Button } from '@/src/components/ui/button';
import { notFound } from 'next/navigation';

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  // Dans une implémentation réelle, vous récupéreriez le produit depuis une API
  // Pour cet exemple, nous simulons des données
  
  // Si le produit n'existe pas, renvoyer à la page 404
  if (!params.productId || !['product-1', 'product-2', 'product-3', 'product-4', 'product-5', 'product-6'].includes(params.productId)) {
    notFound();
  }

  // Simulation de données de produit
  const product = {
    id: params.productId,
    name: params.productId === 'product-1' 
      ? "Tisane Relaxante" 
      : params.productId === 'product-2'
        ? "Huile Essentielle de Lavande"
        : params.productId === 'product-3'
          ? "Infusion Digestive"
          : params.productId === 'product-4'
            ? "Pack Découverte Plantes Médicinales"
            : params.productId === 'product-5'
              ? "Onguent à l'Arnica"
              : "Thé Vert Bio",
    description: `
      Ce produit naturel est conçu pour apporter bien-être et santé. 
      Dans une application réelle, cette description serait beaucoup plus détaillée et proviendrait d'une base de données.
    `,
    longDescription: `
      <p>Découvrez notre produit 100% naturel, cultivé selon des méthodes traditionnelles respectueuses de l'environnement.</p>
      <p>Chaque lot est soigneusement sélectionné et contrôlé pour garantir la meilleure qualité. Nos plantes sont récoltées à la main à maturité optimale pour préserver toutes leurs propriétés.</p>
      <h3>Composition</h3>
      <p>Ingrédients naturels sélectionnés pour leurs propriétés complémentaires. Sans additifs ni conservateurs.</p>
      <h3>Bienfaits</h3>
      <ul>
        <li>Favorise le bien-être général</li>
        <li>Soutient les défenses naturelles</li>
        <li>Contribue à l'équilibre du corps</li>
      </ul>
      <h3>Conseils d'utilisation</h3>
      <p>Pour des résultats optimaux, suivez les recommandations d'usage. Consultez un professionnel de santé en cas de doute.</p>
    `,
    price: params.productId === 'product-1' 
      ? 12.99 
      : params.productId === 'product-2'
        ? 18.50
        : params.productId === 'product-3'
          ? 14.99
          : params.productId === 'product-4'
            ? 24.99
            : params.productId === 'product-5'
              ? 16.75
              : 9.99,
    imageUrl: "/placeholder-product.jpg",
    category: params.productId === 'product-1' || params.productId === 'product-3'
      ? "Tisanes"
      : params.productId === 'product-2'
        ? "Huiles essentielles"
        : params.productId === 'product-4'
          ? "Packs"
          : params.productId === 'product-5'
            ? "Soins corporels"
            : "Thés",
    stock: 15,
    rating: 4.5,
    reviewCount: 24,
    features: [
      "100% naturel",
      "Sans additifs",
      "Cultivé selon des méthodes traditionnelles",
      "Récolté à la main"
    ]
  };

  // Produits similaires pour les recommandations
  const similarProducts = [
    {
      id: 'product-1',
      name: 'Tisane Relaxante',
      price: 12.99,
      category: 'Tisanes'
    },
    {
      id: 'product-3',
      name: 'Infusion Digestive',
      price: 14.99,
      category: 'Tisanes'
    },
    {
      id: 'product-6',
      name: 'Thé Vert Bio',
      price: 9.99,
      category: 'Thés'
    }
  ].filter(p => p.id !== product.id).slice(0, 2);

  return (
    <div className="container mx-auto py-12 px-4">
      <Button variant="outline" className="mb-8" onClick={() => window.history.back()}>
        ← Retour à la boutique
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image du produit */}
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <div className="text-gray-400">Image du produit</div>
        </div>
        
        {/* Informations produit */}
        <div>
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.reviewCount} avis</span>
          </div>
          
          <p className="text-2xl font-bold mb-4">{product.price.toFixed(2)} €</p>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Caractéristiques :</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center mb-6">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {product.stock > 0 ? 'En stock' : 'Rupture de stock'}
            </span>
            {product.stock > 0 && (
              <span className="text-sm text-gray-500 ml-2">
                {product.stock} disponibles
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-24">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantité
              </label>
              <select
                id="quantity"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                defaultValue="1"
              >
                {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            
            <Button className="px-8">Ajouter au panier</Button>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500">
              Livraison offerte à partir de 50€ d'achat. Paiement sécurisé.
            </p>
          </div>
        </div>
      </div>
      
      {/* Description détaillée */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold mb-6">Description détaillée</h2>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
      </div>
      
      {/* Produits similaires */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold mb-8">Vous pourriez également aimer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                  {similarProduct.category}
                </span>
                <h3 className="text-lg font-semibold mb-2">{similarProduct.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{similarProduct.price.toFixed(2)} €</span>
                  <Button size="sm">Ajouter</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
