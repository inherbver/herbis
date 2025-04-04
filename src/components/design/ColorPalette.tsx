'use client';

import React from 'react';

interface ColorBlockProps {
  colorName: string;
  colorClass: string;
  textClass?: string;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ 
  colorName, 
  colorClass, 
  textClass = 'text-white'
}) => {
  return (
    <div 
      className={`${colorClass} p-4 rounded-md shadow-md flex flex-col justify-center items-center h-24 w-full`}
    >
      <span className={`font-medium ${textClass}`}>{colorName}</span>
      <span className={`text-xs mt-1 ${textClass} opacity-80`}>{colorClass}</span>
    </div>
  );
};

export const ColorPalette: React.FC = () => {
  return (
    <div className="p-8 bg-background">
      <h2 className="text-2xl font-medium mb-8">Palette de couleurs</h2>
      
      <div className="mb-8">
        <h3 className="text-xl mb-4 font-medium">Couleurs primitives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ColorBlock colorName="Light Neutral" colorClass="bg-lightNeutral" textClass="text-foreground" />
          <ColorBlock colorName="Blue" colorClass="bg-blue" />
          <ColorBlock colorName="Green" colorClass="bg-green" />
          <ColorBlock colorName="Amber" colorClass="bg-amber" />
          <ColorBlock colorName="Purple" colorClass="bg-purple" />
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl mb-4 font-medium">Couleurs sémantiques</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ColorBlock colorName="Primary" colorClass="bg-primary" />
          <ColorBlock colorName="Secondary" colorClass="bg-secondary" />
          <ColorBlock colorName="Accent" colorClass="bg-accent" />
          <ColorBlock colorName="Background" colorClass="bg-background" textClass="text-foreground" />
          <ColorBlock colorName="Foreground" colorClass="bg-foreground" />
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl mb-4 font-medium">Composants spécifiques</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <ColorBlock colorName="Navigation" colorClass="bg-navigation" />
          <ColorBlock colorName="Footer" colorClass="bg-footer" />
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl mb-4 font-medium">États et états</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <ColorBlock colorName="Muted" colorClass="bg-muted" textClass="text-muted-foreground" />
          <ColorBlock colorName="Destructive" colorClass="bg-destructive" />
          <ColorBlock colorName="Border" colorClass="bg-border" />
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl mb-4 font-medium">Graphiques</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ColorBlock colorName="Chart 1" colorClass="bg-chart-1" />
          <ColorBlock colorName="Chart 2" colorClass="bg-chart-2" />
          <ColorBlock colorName="Chart 3" colorClass="bg-chart-3" />
          <ColorBlock colorName="Chart 4" colorClass="bg-chart-4" />
          <ColorBlock colorName="Chart 5" colorClass="bg-chart-5" />
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
