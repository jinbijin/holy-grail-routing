import { Routes } from '@angular/router';

export const TIC_TAC_TOE_ROUTES: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    loadChildren: () => import('./game-detail/tic-tac-toe-game-detail.module').then((m) => m.TicTacToeGameDetailModule),
  },
  {
    path: '',
    outlet: 'right',
    loadChildren: () =>
      import('./game-overview/tic-tac-toe-game-overview.module').then((m) => m.TicTacToeGameOverviewModule),
  },
];
