import { Routes } from '@angular/router';

export const TIC_TAC_TOE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/tic-tac-toe-page.module').then((m) => m.TicTacToePageModule),
  },
];
