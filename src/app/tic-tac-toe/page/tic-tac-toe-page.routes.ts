import { Routes } from '@angular/router';
import { TicTacToeGamePageComponent } from './tic-tac-toe-page.component';

export const TIC_TAC_TOE_PAGE_ROUTES: Routes = [
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
