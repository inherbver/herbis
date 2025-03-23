'use client';

import { usePathname } from 'next/navigation';

export type FooterLinkCategory = {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
};

export type SocialLink = {
  href: string;
  label: string;
  icon: string;
};

export function useFooter() {
  const pathname = usePathname();
  
  const linkCategories: FooterLinkCategory[] = [
    {
      title: "Découvrir",
      links: [
        { href: "/about", label: "À propos" },
        { href: "/shop", label: "Boutique" },
        { href: "/magazine", label: "Magazine" },
        { href: "/events", label: "Rencontres" },
      ]
    },
    {
      title: "Informations",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
        { href: "/delivery", label: "Livraison" },
        { href: "/returns", label: "Retours" },
      ]
    },
    {
      title: "Légal",
      links: [
        { href: "/terms", label: "Conditions générales" },
        { href: "/privacy", label: "Politique de confidentialité" },
        { href: "/cookies", label: "Politique de cookies" },
        { href: "/mentions", label: "Mentions légales" },
      ]
    }
  ];
  
  const socialLinks: SocialLink[] = [
    { href: "https://instagram.com/inherbisveritas", label: "Instagram", icon: "instagram" },
    { href: "https://facebook.com/inherbisveritas", label: "Facebook", icon: "facebook" },
    { href: "https://twitter.com/inherbisveritas", label: "Twitter", icon: "twitter" },
    { href: "https://pinterest.com/inherbisveritas", label: "Pinterest", icon: "pinterest" }
  ];
  
  const isActive = (path: string) => pathname === path;
  
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} InHerbisVeritas. Tous droits réservés.`;
  
  return {
    linkCategories,
    socialLinks,
    isActive,
    pathname,
    copyrightText
  };
}
