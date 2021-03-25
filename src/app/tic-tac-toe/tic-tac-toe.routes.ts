import { Routes } from '@angular/router';

export const TIC_TAC_TOE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./game-landing/tic-tac-toe-game-landing.module').then((m) => m.TicTacToeGameLandingModule),
  },
];
