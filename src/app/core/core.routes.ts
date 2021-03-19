import { Routes } from '@angular/router';

export const CORE_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('src/app/home/home.module').then((m) => m.HomeModule) },
];
