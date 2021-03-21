import { Routes } from '@angular/router';

export const TIC_TAC_TOE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./game-landing/tic-tac-toe-game-landing.module').then((m) => m.TicTacToeGameLandingModule),
  },
  {
    path: '',
    outlet: 'right',
    loadChildren: () =>
      import('./game-overview/tic-tac-toe-game-overview.module').then((m) => m.TicTacToeGameOverviewModule),
  },
];
