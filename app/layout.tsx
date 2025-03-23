import './globals.css';
import type { Metadata } from 'next';
import { Cinzel, Raleway } from 'next/font/google';
import { ClientLayout } from './ClientLayout';

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'inHerbisVeritas',
  description: 'E-commerce et magazine sur les plantes médicinales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${raleway.variable} ${cinzel.variable} font-sans bg-background text-foreground`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
