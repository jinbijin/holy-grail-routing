import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  { path: '', loadChildren: () => import('./page/home-page.module').then((m) => m.HomePageModule) },
];
