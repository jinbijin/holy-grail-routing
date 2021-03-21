import { Routes } from '@angular/router';
import { TicTacToeGamePageComponent } from './tic-tac-toe-game-page.component';

export const TIC_TAC_TOE_GAME_LANDING_ROUTES: Routes = [
  {
    path: '',
    component: TicTacToeGamePageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../game-detail/tic-tac-toe-game-detail.module').then((m) => m.TicTacToeGameDetailModule),
      },
    ],
  },
];
