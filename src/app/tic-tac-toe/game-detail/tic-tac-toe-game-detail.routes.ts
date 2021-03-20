import { Routes } from '@angular/router';
import { TicTacToeGameDetailComponent } from './tic-tac-toe-game-detail.component';
import { TicTacToeGamePageComponent } from './tic-tac-toe-game-page.component';

export const TIC_TAC_TOE_GAME_DETAIL_ROUTES: Routes = [
  {
    path: '',
    component: TicTacToeGamePageComponent,
    children: [{ path: ':id', component: TicTacToeGameDetailComponent }],
  },
];
