import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerStateModule } from 'src/app/shared/states/player/player-state.module';
import { TicTacToeGameStateModule } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game-state.module';
import { TicTacToeGameDetailComponent } from './tic-tac-toe-game-detail.component';
import { TIC_TAC_TOE_GAME_DETAIL_ROUTES } from './tic-tac-toe-game-detail.routes';
import { TicTacToeGamePageComponent } from './tic-tac-toe-game-page.component';

@NgModule({
  declarations: [TicTacToeGamePageComponent, TicTacToeGameDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TIC_TAC_TOE_GAME_DETAIL_ROUTES),
    PlayerStateModule,
    TicTacToeGameStateModule,
  ],
})
export class TicTacToeGameDetailModule {}
