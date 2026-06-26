import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
      { path: 'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent) },
      { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
