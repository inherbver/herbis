"use client";

import React from 'react';
import { Button } from '@/src/components/ui/button';

export default function ProfilePage() {
  // Dans une application réelle, vous récupéreriez les données de l'utilisateur depuis un état global
  // ou directement depuis le serveur d'authentification
  const userProfile = {
    name: "Utilisateur Test",
    email: "user@example.com",
    joinedDate: "Janvier 2025",
    orders: []
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Mon Profil</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Nom</p>
            <p className="font-medium">{userProfile.name}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{userProfile.email}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Membre depuis</p>
            <p className="font-medium">{userProfile.joinedDate}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <Button variant="outline">Modifier mes informations</Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Historique des commandes</h2>
        
        {userProfile.orders.length === 0 ? (
          <p className="text-gray-500">Vous n'avez pas encore passé de commande.</p>
        ) : (
          <div className="overflow-x-auto">
            {/* Ici, vous afficheriez un tableau avec l'historique des commandes */}
            <p>Liste des commandes à implémenter</p>
          </div>
        )}
      </div>
    </div>
  );
}
