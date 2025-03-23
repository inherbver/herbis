"use client";

import React from 'react';

interface ContactHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export function ContactHeader({ 
  title, 
  description, 
  backgroundImage = "/images/headers/contact-header.jpg" 
}: ContactHeaderProps) {
  return (
    <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center text-center overflow-hidden mb-12">
      {/* Image d'arrière-plan */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-[2px]"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Couche de superposition */}
      <div className="absolute inset-0 bg-background/30" />
      
      {/* Contenu */}
      <div className="relative z-10 max-w-3xl px-4 py-10 text-white">
        <h1 className="text-4xl md:text-5xl font-cinzel text-white mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-white/90">{description}</p>
      </div>
    </div>
  );
}
