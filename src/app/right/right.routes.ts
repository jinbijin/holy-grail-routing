import { Routes } from '@angular/router';

export const RIGHT_ROUTES: Routes = [
  {
    path: 'tic-tac-toe',
    loadChildren: () => import('./tic-tac-toe/tic-tac-toe.module').then((m) => m.RightTicTacToeModule),
  },
];
