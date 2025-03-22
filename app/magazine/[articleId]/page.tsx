"use client";

import React from 'react';
import { Button } from '@/src/components/ui/button';
import { notFound } from 'next/navigation';

type ArticlePageProps = {
  params: {
    articleId: string;
  };
};

export default function ArticlePage({ params }: ArticlePageProps) {
  // Dans une implémentation réelle, vous récupéreriez l'article depuis une API
  // Pour cet exemple, nous simulons des données
  
  // Si l'article n'existe pas, renvoyer à la page 404
  if (!params.articleId || !['article-1', 'article-2', 'article-3'].includes(params.articleId)) {
    notFound();
  }

  // Simulation de données d'article
  const article = {
    id: params.articleId,
    title: params.articleId === 'article-1' 
      ? "Les vertus médicinales de la lavande" 
      : params.articleId === 'article-2'
        ? "Guide complet sur l'utilisation du thym"
        : "Tisanes détox: mythes et réalités",
    content: `
      <p>Ceci est un article détaillé sur les plantes médicinales. Dans une application réelle, ce contenu serait récupéré depuis une base de données ou une API.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
      <h2>Propriétés médicinales</h2>
      <p>Les plantes médicinales ont été utilisées depuis des millénaires pour traiter diverses maladies et affections. Elles contiennent des composés actifs qui peuvent aider à soulager les symptômes et à favoriser la guérison.</p>
      <p>Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h2>Utilisations traditionnelles</h2>
      <p>Les tradipraticiens et les herboristes du monde entier ont transmis leurs connaissances de génération en génération, préservant ainsi un riche patrimoine de sagesse médicinale.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
    `,
    publishDate: "22 mars 2025",
    author: "Dr. Marie Dupont",
    imageUrl: "/placeholder-article.jpg",
    tags: ["Plantes médicinales", "Bien-être", "Sommeil"]
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Button variant="outline" className="mb-8" onClick={() => window.history.back()}>
        ← Retour
      </Button>
      
      <article>
        <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span key={tag} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
          <div>
            <p className="font-semibold">{article.author}</p>
            <p className="text-sm text-gray-500">{article.publishDate}</p>
          </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Articles associés</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['article-1', 'article-2', 'article-3']
              .filter(id => id !== article.id)
              .map((id) => (
                <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">
                      {id === 'article-1' 
                        ? "Les vertus médicinales de la lavande" 
                        : id === 'article-2'
                          ? "Guide complet sur l'utilisation du thym"
                          : "Tisanes détox: mythes et réalités"}
                    </h3>
                    <Button variant="link" className="p-0">Lire l'article →</Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
