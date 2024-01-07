import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'lession-select',
    pathMatch: 'full',
  },
  {
    path: 'lession-select',
    loadComponent: () => import('./lession-select/lession-select.page').then( m => m.LessionSelectPage)
  },
];
