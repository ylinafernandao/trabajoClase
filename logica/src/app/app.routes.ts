import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full',
  },
  {
    path: 'students',
    loadComponent: () => import('./pages/students/students.page').then( m => m.StudentsPage)
  },
  {
    path: 'prueba',
    loadComponent: () => import('./pages/prueba/prueba.page').then( m => m.PruebaPage)
  },
];
