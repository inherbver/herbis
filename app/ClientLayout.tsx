'use client';

import { ComposedNavbar } from '@/src/components/layout/Navbar';
import { ComposedFooter } from '@/src/components/layout/Footer';

export interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <ComposedNavbar />
      </nav>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer>
        <ComposedFooter />
      </footer>
    </div>
  );
}
