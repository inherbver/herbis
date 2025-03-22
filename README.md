# inHerbisVeritas

E-commerce et magazine sur les plantes médicinales développé avec Next.js 13, React 18.2.0, Tailwind CSS, et les composants UI de ShadCN.

## Architecture

Ce projet utilise une architecture à trois couches :

1. **Frontend Next.js (inHerbisVeritas)** - Ce dépôt
   - Interface utilisateur et présentation
   - Next.js 13.5.6, React 18.2.0, et Tailwind CSS
   - Composants ShadCN pour une UI élégante et responsive
   - Interagit avec le serveur d'authentification via des appels API

2. **Serveur d'authentification (IhvAuth)** - Projet séparé
   - Gère toutes les opérations critiques de sécurité et d'authentification
   - Exposé à l'URL http://localhost:5000 en développement

3. **Backend Supabase**
   - Fournit la base de données et les services associés

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Environnement

Assurez-vous de configurer les variables d'environnement dans le fichier `.env.local` :

```
# Authentification
API_URL=http://localhost:5000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon_supabase

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_stripe_publishable
```

## Structure du projet

```
inherbisveritas/
├── app/                # Dossier App Router de Next.js
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/         # Composants réutilisables
│   └── ui/             # Composants UI (ShadCN)
├── lib/                # Utilitaires et services
├── public/             # Assets statiques
└── README.md           # Documentation
```
