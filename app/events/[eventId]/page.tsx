"use client";

import React from 'react';
import { Button } from '@/src/components/ui/button';
import { notFound } from 'next/navigation';

type EventPageProps = {
  params: {
    eventId: string;
  };
};

export default function EventPage({ params }: EventPageProps) {
  // Dans une implémentation réelle, vous récupéreriez l'événement depuis une API
  // Pour cet exemple, nous simulons des données
  
  // Si l'événement n'existe pas, renvoyer à la page 404
  if (!params.eventId || !['event-1', 'event-2', 'event-3', 'event-4'].includes(params.eventId)) {
    notFound();
  }

  // Simulation de données d'événement
  const event = {
    id: params.eventId,
    title: params.eventId === 'event-1' 
      ? "Atelier de découverte des plantes médicinales" 
      : params.eventId === 'event-2'
        ? "Conférence: Les bienfaits des huiles essentielles"
        : params.eventId === 'event-3'
          ? "Formation: Créer son propre jardin médicinal"
          : "Webinaire: Remèdes naturels pour le stress",
    description: `
      Cet événement vous permettra d'approfondir vos connaissances sur les plantes médicinales et leurs utilisations.
      Dans une application réelle, cette description serait beaucoup plus détaillée et proviendrait d'une base de données.
    `,
    longDescription: `
      <p>Rejoignez-nous pour cet événement exceptionnel dédié aux plantes médicinales et à leurs bienfaits pour la santé.</p>
      <p>Que vous soyez novice ou passionné, vous trouverez des informations précieuses et pratiques pour enrichir vos connaissances.</p>
      <h3>Programme détaillé</h3>
      <ul>
        <li>Introduction aux principes de base</li>
        <li>Présentation des plantes essentielles et leurs propriétés</li>
        <li>Démonstrations pratiques</li>
        <li>Session de questions/réponses avec notre expert</li>
      </ul>
      <h3>Ce que vous apprendrez</h3>
      <p>À l'issue de cet événement, vous serez capable d'identifier les plantes médicinales courantes, comprendre leurs utilisations traditionnelles et savoir comment les intégrer dans votre quotidien en toute sécurité.</p>
      <h3>Matériel à apporter</h3>
      <p>Un carnet de notes, votre curiosité et votre bonne humeur !</p>
    `,
    date: params.eventId === 'event-1' 
      ? "15 avril 2025" 
      : params.eventId === 'event-2'
        ? "22 avril 2025"
        : params.eventId === 'event-3'
          ? "10 mai 2025"
          : "5 juin 2025",
    time: params.eventId === 'event-1' 
      ? "14h00 - 17h00" 
      : params.eventId === 'event-2'
        ? "19h00 - 21h00"
        : params.eventId === 'event-3'
          ? "09h00 - 17h00"
          : "18h30 - 20h00",
    location: params.eventId === 'event-1' 
      ? "Jardin Botanique, Paris" 
      : params.eventId === 'event-2'
        ? "Centre culturel, Lyon"
        : params.eventId === 'event-3'
          ? "Ferme pédagogique, Marseille"
          : "En ligne",
    speaker: params.eventId === 'event-1' 
      ? "Dr. Marie Dupont" 
      : params.eventId === 'event-2'
        ? "Jean Botanique"
        : params.eventId === 'event-3'
          ? "Pr. Sophie Martin"
          : "Dr. Thomas Levert",
    speakerBio: "Expert reconnu dans le domaine des plantes médicinales avec plus de 15 ans d'expérience.",
    price: params.eventId === 'event-1' 
      ? 25 
      : params.eventId === 'event-2'
        ? 0
        : params.eventId === 'event-3'
          ? 75
          : 15,
    imageUrl: "/placeholder-event.jpg",
    capacity: params.eventId === 'event-1' 
      ? 20 
      : params.eventId === 'event-2'
        ? 100
        : params.eventId === 'event-3'
          ? 15
          : 200,
    remainingSeats: params.eventId === 'event-1' 
      ? 8 
      : params.eventId === 'event-2'
        ? 45
        : params.eventId === 'event-3'
          ? 3
          : 150,
    tags: ["Plantes médicinales", "Bien-être", "Santé naturelle"]
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Button variant="outline" className="mb-8" onClick={() => window.history.back()}>
        ← Retour aux événements
      </Button>
      
      {/* En-tête de l'événement */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="h-64 bg-gray-200 relative">
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
            <div className="flex flex-wrap gap-2 mb-2">
              {event.tags.map((tag) => (
                <span key={tag} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-white">{event.title}</h1>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-600 mb-6">{event.description}</p>
              
              <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: event.longDescription }} />
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Intervenant</h2>
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">{event.speaker}</h3>
                    <p className="text-gray-600">{event.speakerBio}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Lieu</h2>
                {event.location === "En ligne" ? (
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium text-blue-800">Événement en ligne</p>
                    <p className="text-blue-600">Un lien de connexion vous sera envoyé après inscription</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-medium">{event.location}</p>
                    <div className="h-40 bg-gray-200 rounded-md mt-2"></div>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
                <h2 className="text-xl font-bold mb-4">Détails de l'événement</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.price === 0 ? 'Gratuit' : `${event.price.toFixed(2)} €`}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{event.remainingSeats} places restantes</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full">Réserver ma place</Button>
                  <Button variant="outline" className="w-full">Ajouter au calendrier</Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Événement organisé par inHerbisVeritas. Pour toute question, contactez-nous au 01 23 45 67 89.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partage et inscription à la newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Partager l'événement</h3>
          <p className="text-gray-600 mb-4">
            Faites connaître cet événement à vos amis et collègues intéressés par les plantes médicinales.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Facebook</Button>
            <Button variant="outline" size="sm">Twitter</Button>
            <Button variant="outline" size="sm">Email</Button>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Ne manquez aucun événement</h3>
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
