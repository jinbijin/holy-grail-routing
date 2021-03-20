import { Routes } from '@angular/router';

export const CORE_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('src/app/home/home.module').then((m) => m.HomeModule) },
  {
    path: 'tic-tac-toe',
    loadChildren: () => import('src/app/tic-tac-toe/tic-tac-toe.module').then((m) => m.TicTacToeModule),
  },
  {
    path: '',
    outlet: 'header',
    loadChildren: () => import('src/app/header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: '',
    outlet: 'footer',
    loadChildren: () => import('src/app/footer/footer.module').then((m) => m.FooterModule),
  },
];
