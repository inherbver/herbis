import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactHeader } from '@/src/components/contact/ContactHeader';

describe('ContactHeader', () => {
  const defaultProps = {
    title: 'Contactez-nous',
    description: 'Notre équipe est à votre disposition pour répondre à toutes vos questions.'
  };

  test('rend correctement avec les props par défaut', () => {
    render(<ContactHeader {...defaultProps} />);
    
    expect(screen.getByText('Contactez-nous')).toBeInTheDocument();
    expect(screen.getByText('Notre équipe est à votre disposition pour répondre à toutes vos questions.')).toBeInTheDocument();
  });

  test('utilise l\'image d\'arrière-plan par défaut quand aucune n\'est spécifiée', () => {
    render(<ContactHeader {...defaultProps} />);
    
    const backgroundElement = document.querySelector('.bg-cover.bg-center');
    expect(backgroundElement).toHaveStyle({
      backgroundImage: `url(/images/headers/contact-header.jpg)`
    });
  });

  test('utilise l\'image d\'arrière-plan personnalisée quand spécifiée', () => {
    const customProps = {
      ...defaultProps,
      backgroundImage: '/images/custom-background.jpg'
    };
    
    render(<ContactHeader {...customProps} />);
    
    const backgroundElement = document.querySelector('.bg-cover.bg-center');
    expect(backgroundElement).toHaveStyle({
      backgroundImage: `url(/images/custom-background.jpg)`
    });
  });
});
