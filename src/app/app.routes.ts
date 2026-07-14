import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about-pages/about-pages'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing-pages/pricing-pages'),
  },

  {
    path: '**',
    redirectTo: 'about',
  },
];
