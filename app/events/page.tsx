"use client";

import React from 'react';
import { Button } from '@/src/components/ui/button';

export default function EventsPage() {
  // Simulation de données d'événements
  const events = [
    {
      id: "event-1",
      title: "Atelier de découverte des plantes médicinales",
      description: "Apprenez à identifier et utiliser les plantes médicinales les plus courantes",
      date: "15 avril 2025",
      time: "14h00 - 17h00",
      location: "Jardin Botanique, Paris",
      speaker: "Dr. Marie Dupont",
      price: 25,
      imageUrl: "/placeholder-event.jpg",
      capacity: 20,
      remainingSeats: 8
    },
    {
      id: "event-2",
      title: "Conférence: Les bienfaits des huiles essentielles",
      description: "Tout savoir sur l'utilisation sécuritaire et efficace des huiles essentielles",
      date: "22 avril 2025",
      time: "19h00 - 21h00",
      location: "Centre culturel, Lyon",
      speaker: "Jean Botanique",
      price: 0,
      imageUrl: "/placeholder-event.jpg",
      capacity: 100,
      remainingSeats: 45
    },
    {
      id: "event-3",
      title: "Formation: Créer son propre jardin médicinal",
      description: "Les bases pour cultiver vos propres plantes médicinales, même en espace limité",
      date: "10 mai 2025",
      time: "09h00 - 17h00",
      location: "Ferme pédagogique, Marseille",
      speaker: "Pr. Sophie Martin",
      price: 75,
      imageUrl: "/placeholder-event.jpg",
      capacity: 15,
      remainingSeats: 3
    },
    {
      id: "event-4",
      title: "Webinaire: Remèdes naturels pour le stress",
      description: "Des solutions naturelles pour gérer l'anxiété et le stress au quotidien",
      date: "5 juin 2025",
      time: "18h30 - 20h00",
      location: "En ligne",
      speaker: "Dr. Thomas Levert",
      price: 15,
      imageUrl: "/placeholder-event.jpg",
      capacity: 200,
      remainingSeats: 150
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Événements</h1>
      <p className="text-xl text-gray-600 mb-8">Rejoignez-nous pour des ateliers, formations et conférences sur les plantes médicinales</p>
      
      {/* Bannière d'événement à venir */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 bg-gray-200 md:h-auto"></div>
          <div className="p-8">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
              Événement à la une
            </span>
            <h2 className="text-2xl font-bold mb-2">Salon des Plantes Médicinales 2025</h2>
            <p className="text-gray-600 mb-4">
              Le plus grand événement annuel dédié aux plantes médicinales en France. Plus de 50 exposants, des conférences, 
              des ateliers pratiques et bien plus encore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">22-24 juillet 2025</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Porte de Versailles, Paris</span>
              </div>
            </div>
            <Button>En savoir plus</Button>
          </div>
        </div>
      </div>
      
      {/* Liste des événements */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Événements à venir</h2>
          <div className="flex items-center">
            <label htmlFor="filter" className="text-sm text-gray-600 mr-2">Filtrer par:</label>
            <select
              id="filter"
              className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
            >
              <option>Tous les événements</option>
              <option>Ateliers</option>
              <option>Conférences</option>
              <option>Formations</option>
              <option>En ligne</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="h-48 bg-gray-200 md:h-auto"></div>
                <div className="p-6 md:col-span-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-6 md:text-right">
                      <p className="text-lg font-bold mb-1">
                        {event.price === 0 ? 'Gratuit' : `${event.price.toFixed(2)} €`}
                      </p>
                      <p className="text-sm text-gray-500">
                        {event.remainingSeats} places restantes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-600">{event.speaker}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <Button variant="outline">Plus d'informations</Button>
                    <Button>Réserver une place</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Calendrier et inscription à la newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Calendrier des événements</h3>
          <p className="text-gray-600 mb-4">
            Consultez notre calendrier complet pour ne manquer aucun de nos événements à venir.
          </p>
          <Button variant="outline">Voir le calendrier</Button>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Restez informé</h3>
          <p className="text-gray-600 mb-4">
            Recevez les notifications de nos prochains événements directement dans votre boîte mail.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            <Button>S'inscrire</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
