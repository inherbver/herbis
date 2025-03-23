'use client';

import React from 'react';
import { Footer } from './Footer';
import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterLegal } from './FooterLegal';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterSocial } from './FooterSocial';

export function ComposedFooter() {
  return (
    <Footer>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-4">
          <div className="lg:col-span-3">
            <FooterBrand />
          </div>
          <div className="lg:col-span-6">
            <FooterLinks />
          </div>
          <div className="lg:col-span-3 space-y-8">
            <FooterNewsletter />
            <FooterSocial />
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-4">
          <FooterLegal />
        </div>
      </div>
    </Footer>
  );
}
