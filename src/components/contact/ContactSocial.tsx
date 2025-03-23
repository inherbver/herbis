"use client";

import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-accent/5 transition-all duration-300 hover:scale-105"
      aria-label={label}
    >
      <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center shadow-md">
        {icon}
      </div>
      <span className="font-medium text-lg">{label}</span>
    </a>
  );
}

export function ContactSocial() {
  const socialLinks = [
    {
      href: "https://facebook.com/inherbisveritas",
      label: "Facebook",
      icon: <Facebook className="h-8 w-8 text-primary" />,
    },
    {
      href: "https://instagram.com/inherbisveritas",
      label: "Instagram",
      icon: <Instagram className="h-8 w-8 text-accent" />,
    },
    {
      href: "https://twitter.com/inherbisveritas",
      label: "Twitter",
      icon: <Twitter className="h-8 w-8 text-secondary" />,
    },
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {socialLinks.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
}
