import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Conditions Générales</h1>
      
      <div className="prose prose-green max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Bienvenue sur inHerbisVeritas. Les présentes Conditions Générales régissent votre utilisation de notre site web et de nos services. En accédant à notre site ou en utilisant nos services, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site ou nos services.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Définitions</h2>
          <p>
            Dans les présentes Conditions Générales, les termes suivants auront les significations suivantes :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Site</strong> : désigne le site web inHerbisVeritas accessible à l'adresse www.inherbisveritas.fr
            </li>
            <li>
              <strong>Services</strong> : désigne tous les services proposés par inHerbisVeritas, y compris la vente de produits, les événements, et toutes les fonctionnalités du Site.
            </li>
            <li>
              <strong>Utilisateur</strong> : désigne toute personne qui accède au Site ou utilise les Services.
            </li>
            <li>
              <strong>Compte</strong> : désigne l'espace personnel de l'Utilisateur sur le Site.
            </li>
            <li>
              <strong>Produits</strong> : désigne tous les produits proposés à la vente sur le Site.
            </li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. Inscription et Compte</h2>
          <p>
            Pour accéder à certains Services, vous devrez créer un compte. Vous êtes responsable de maintenir la confidentialité de vos informations de compte et de toutes les activités qui se produisent sous votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.
          </p>
          <p className="mt-2">
            Lors de l'inscription, vous acceptez de fournir des informations exactes, à jour et complètes. Nous nous réservons le droit de suspendre ou de résilier votre compte si les informations fournies sont fausses, inexactes, obsolètes ou incomplètes.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Commandes et Paiements</h2>
          <p>
            En passant une commande sur notre Site, vous vous engagez à acheter les Produits au prix indiqué, plus les frais de livraison et taxes applicables. Nous nous réservons le droit d'accepter ou de refuser votre commande pour quelque raison que ce soit.
          </p>
          <p className="mt-2">
            Les paiements sont traités par des prestataires de services de paiement tiers. Nous ne stockons pas vos informations de paiement. En effectuant un paiement, vous acceptez les conditions de ces prestataires.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Livraison</h2>
          <p>
            Nous expédions les Produits aux adresses de livraison que vous fournissez lors de la commande. Les délais de livraison sont donnés à titre indicatif et peuvent varier. Nous ne sommes pas responsables des retards causés par des événements indépendants de notre volonté.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Retours et Remboursements</h2>
          <p>
            Vous pouvez retourner un Produit dans les 14 jours suivant sa réception si le Produit est en parfait état, dans son emballage d'origine et accompagné de la facture. Les frais de retour sont à votre charge.
          </p>
          <p className="mt-2">
            Les remboursements seront effectués dans les 14 jours suivant la réception du Produit retourné, en utilisant le même moyen de paiement que celui utilisé pour la commande initiale.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Propriété Intellectuelle</h2>
          <p>
            Tout le contenu du Site, y compris les textes, graphiques, logos, images, vidéos, est la propriété d'inHerbisVeritas ou de ses fournisseurs de contenu et est protégé par les lois françaises et internationales sur la propriété intellectuelle.
          </p>
          <p className="mt-2">
            Vous n'êtes pas autorisé à reproduire, distribuer, modifier, afficher, transmettre ou utiliser ce contenu de quelque manière que ce soit sans notre autorisation écrite préalable.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Responsabilité</h2>
          <p>
            Les informations et conseils fournis sur notre Site sont donnés à titre indicatif uniquement. Nous ne garantissons pas l'exactitude, l'exhaustivité ou l'actualité de ces informations.
          </p>
          <p className="mt-2">
            En aucun cas, nous ne serons responsables des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser notre Site ou nos Services.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">9. Protection des Données Personnelles</h2>
          <p>
            Nous collectons et traitons vos données personnelles conformément à notre Politique de Confidentialité, qui fait partie intégrante des présentes Conditions Générales.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">10. Modification des Conditions Générales</h2>
          <p>
            Nous nous réservons le droit de modifier ces Conditions Générales à tout moment. Les modifications prendront effet dès leur publication sur le Site. Votre utilisation continue du Site après la publication des modifications constitue votre acceptation de ces modifications.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">11. Droit Applicable et Juridiction</h2>
          <p>
            Les présentes Conditions Générales sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence exclusive des tribunaux français.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
          <p>
            Si vous avez des questions concernant ces Conditions Générales, veuillez nous contacter à l'adresse email suivante : legal@inherbisveritas.fr
          </p>
        </section>
        
        <p className="mt-10 text-sm text-gray-500">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
