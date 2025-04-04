import React from 'react';
import { ColorPalette } from '@/src/components/design/ColorPalette';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar>
        <div className="container flex justify-between items-center">
          <div className="text-xl font-cinzel">inHerbisVeritas</div>
          <nav className="flex gap-x-6">
            <a href="/" className="nav-link">Accueil</a>
            <a href="/design-system" className="nav-link">Design System</a>
          </nav>
        </div>
      </Navbar>
      
      <main className="flex-grow container mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-cinzel mb-6">Design System</h1>
          <p className="mb-8 text-lg">
            Cette page démontre le système de design centralisé, en particulier la gestion des couleurs
          </p>
          
          <section className="mb-16">
            <h2 className="text-2xl font-cinzel mb-4">Palette de couleurs</h2>
            <p className="mb-4">
              Notre palette de couleurs est structurée de façon sémantique, chaque couleur ayant une fonction précise dans l'interface.
            </p>
            <ColorPalette />
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-cinzel mb-4">Utilisation du footer et navbar</h2>
            <p className="mb-4">
              Le navbar et le footer utilisent désormais les couleurs sémantiques <code>bg-navigation</code>, <code>text-navigation-foreground</code>, 
              <code>bg-footer</code> et <code>text-footer-foreground</code>.
            </p>
            <div className="mt-8 border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-muted font-mono text-sm">
                <pre>{`<Navbar className="...">
  {/* Contenu du navbar */}
</Navbar>

<Footer className="...">
  {/* Contenu du footer */}
</Footer>`}</pre>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-cinzel mb-4">Exemples de composants avec couleurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
                <h3 className="text-xl mb-3">Carte primaire</h3>
                <p className="text-card-foreground mb-4">Utilise les couleurs <code>bg-card</code> et <code>text-card-foreground</code></p>
                <button className="btn-primary px-4 py-2 rounded-md">Bouton primaire</button>
              </div>
              
              <div className="p-6 bg-muted rounded-lg border border-border shadow-sm">
                <h3 className="text-xl mb-3">Carte secondaire</h3>
                <p className="text-muted-foreground mb-4">Utilise les couleurs <code>bg-muted</code> et <code>text-muted-foreground</code></p>
                <button className="btn-secondary px-4 py-2 rounded-md">Bouton secondaire</button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-cinzel mb-2">inHerbisVeritas</h3>
            <p className="text-footer-foreground/80">Découvrez la nature autrement</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">Liens</h4>
            <ul className="space-y-2">
              <li><a href="/" className="footer-link">Accueil</a></li>
              <li><a href="/design-system" className="footer-link">Design System</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">Contact</h4>
            <p className="text-footer-foreground/80">info@inherbisveritas.fr</p>
          </div>
        </div>
      </Footer>
    </div>
  );
}
