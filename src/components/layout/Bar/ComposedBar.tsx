'use client';

import { Bar as BarBase } from './Bar';
import { BarBrand } from './BarBrand';
import { BarLinks } from './BarLinks';
import { BarIcons } from './BarIcons';

// Définir le type avec les sous-composants
type ComposedBarType = typeof BarBase & {
  Brand: typeof BarBrand;
  Links: typeof BarLinks;
  Icons: typeof BarIcons;
};

// Créer le composant composé
const ComposedBar = BarBase as ComposedBarType;
ComposedBar.Brand = BarBrand;
ComposedBar.Links = BarLinks;
ComposedBar.Icons = BarIcons;

export { ComposedBar as Bar };
