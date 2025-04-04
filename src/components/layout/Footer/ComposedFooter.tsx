'use client';

import React from 'react';
import { Container } from '@/src/components/ui/container';
import { Footer } from './Footer';
import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterSocial } from './FooterSocial';
import { FooterLegal } from './FooterLegal';
import { Separator } from '@/src/components/ui/separator';

export function ComposedFooter() {
  return (
    <Footer>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Branding & Description */}
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>
          
          {/* Links */}
          <div className="lg:col-span-4">
            <FooterLinks />
          </div>
          
          {/* Newsletter & Social */}
          <div className="lg:col-span-4 space-y-8">
            <FooterNewsletter />
            <FooterSocial />
          </div>
        </div>
        
        <Separator className="my-8 opacity-30" />
        
        <FooterLegal />
      </Container>
    </Footer>
  );
}
