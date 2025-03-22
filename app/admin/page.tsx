"use client";

import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Administration</h1>
      
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`py-4 px-6 ${activeTab === 'dashboard' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Tableau de bord
        </button>
        <button
          className={`py-4 px-6 ${activeTab === 'products' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('products')}
        >
          Produits
        </button>
        <button
          className={`py-4 px-6 ${activeTab === 'articles' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </button>
        <button
          className={`py-4 px-6 ${activeTab === 'events' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('events')}
        >
          Événements
        </button>
        <button
          className={`py-4 px-6 ${activeTab === 'orders' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('orders')}
        >
          Commandes
        </button>
        <button
          className={`py-4 px-6 ${activeTab === 'customers' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('customers')}
        >
          Clients
        </button>
        <button
          className={`py-4 px-6 ${activeTab === 'settings' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('settings')}
        >
          Paramètres
        </button>
      </div>
      
      {/* Contenu du tableau de bord */}
      {activeTab === 'dashboard' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-500 mb-1">Ventes du jour</h3>
              <p className="text-3xl font-bold">129.00 €</p>
              <p className="text-sm text-green-600 mt-2">+12% par rapport à hier</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-500 mb-1">Commandes du jour</h3>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-red-600 mt-2">-3% par rapport à hier</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-500 mb-1">Visiteurs du jour</h3>
              <p className="text-3xl font-bold">243</p>
              <p className="text-sm text-green-600 mt-2">+22% par rapport à hier</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-500 mb-1">Produits en stock</h3>
              <p className="text-3xl font-bold">189</p>
              <p className="text-sm text-gray-500 mt-2">5 produits en rupture</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Commandes récentes</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((order) => (
                  <div key={order} className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <p className="font-medium">Commande #{23100 + order}</p>
                      <p className="text-sm text-gray-500">il y a {order} heure(s)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{(Math.random() * 100).toFixed(2)} €</p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        order % 3 === 0 ? 'bg-yellow-100 text-yellow-800' : 
                        order % 3 === 1 ? 'bg-green-100 text-green-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order % 3 === 0 ? 'En attente' : order % 3 === 1 ? 'Complétée' : 'Expédiée'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-4">Voir toutes les commandes</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Produits les plus vendus</h3>
              <div className="space-y-4">
                {['Tisane Relaxante', 'Huile Essentielle de Lavande', 'Pack Découverte', 'Thé Vert Bio', 'Infusion Digestive'].map((product, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded mr-3"></div>
                      <p className="font-medium">{product}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{Math.floor(Math.random() * 50) + 10} unités</p>
                      <p className="text-sm text-gray-500">{(Math.random() * 1000).toFixed(2)} €</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-4">Voir tous les produits</Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Interface simple pour les autres onglets */}
      {activeTab !== 'dashboard' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            {activeTab === 'products' ? 'Gestion des Produits' :
            activeTab === 'articles' ? 'Gestion des Articles' :
            activeTab === 'events' ? 'Gestion des Événements' :
            activeTab === 'orders' ? 'Gestion des Commandes' :
            activeTab === 'customers' ? 'Gestion des Clients' :
            'Paramètres du Site'}
          </h2>
          <p className="text-gray-600 mb-6">
            Cette section permettrait de gérer les {
            activeTab === 'products' ? 'produits' :
            activeTab === 'articles' ? 'articles' :
            activeTab === 'events' ? 'événements' :
            activeTab === 'orders' ? 'commandes' :
            activeTab === 'customers' ? 'clients' :
            'paramètres'} de la plateforme.
          </p>
          
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-400">Interface de gestion à implémenter</p>
          </div>
        </div>
      )}
    </div>
  );
}
