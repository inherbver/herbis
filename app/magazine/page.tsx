"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';

export default function MagazinePage() {
  // Simulation de données d'articles
  const articles = [
    {
      id: "article-1",
      title: "Les vertus médicinales de la lavande",
      excerpt: "Découvrez comment la lavande peut aider à réduire le stress et améliorer le sommeil.",
      publishDate: "22 mars 2025",
      author: "Dr. Marie Dupont",
      imageUrl: "/placeholder-article.jpg",
      tags: ["Plantes médicinales", "Bien-être", "Sommeil"]
    },
    {
      id: "article-2",
      title: "Guide complet sur l'utilisation du thym",
      excerpt: "Le thym, une plante aux multiples bienfaits pour la santé respiratoire et immunitaire.",
      publishDate: "18 mars 2025",
      author: "Jean Botanique",
      imageUrl: "/placeholder-article.jpg",
      tags: ["Plantes médicinales", "Immunité", "Respiration"]
    },
    {
      id: "article-3",
      title: "Tisanes détox: mythes et réalités",
      excerpt: "Analyse des effets réels des tisanes dites 'détox' sur notre organisme.",
      publishDate: "15 mars 2025",
      author: "Pr. Sophie Martin",
      imageUrl: "/placeholder-article.jpg",
      tags: ["Tisanes", "Détox", "Nutrition"]
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Magazine inHerbisVeritas</h1>
        <p className="text-xl mb-8">Découvrez nos articles sur les plantes médicinales et leurs bienfaits</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8">Articles récents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-green-100 text-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{article.author}</span>
                  <span>{article.publishDate}</span>
                </div>
                <Link href={`/magazine/${article.id}`}>
                  <Button className="w-full">Lire l'article</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="mx-auto">Voir plus d'articles</Button>
        </div>
      </section>

      <section className="mt-24">
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Abonnez-vous à notre newsletter</h2>
          <p className="mb-6">Recevez nos derniers articles et conseils directement dans votre boîte mail.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button>S'abonner</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
