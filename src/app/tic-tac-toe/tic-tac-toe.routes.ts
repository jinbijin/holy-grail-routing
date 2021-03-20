import { Routes } from '@angular/router';

export const TIC_TAC_TOE_ROUTES: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    loadChildren: () => import('./game-detail/tic-tac-toe-game-detail.module').then((m) => m.TicTacToeGameDetailModule),
  },
];
