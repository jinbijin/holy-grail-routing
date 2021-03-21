import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { LuxonModule } from 'luxon-angular';
import { PlayerStateModule } from 'src/app/shared/states/player/player-state.module';
import { TicTacToeGameStateModule } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game-state.module';
import { TicTacToeGameDetailComponent } from './tic-tac-toe-game-detail.component';
import { TIC_TAC_TOE_GAME_DETAIL_ROUTES } from './tic-tac-toe-game-detail.routes';

@NgModule({
  declarations: [TicTacToeGameDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TIC_TAC_TOE_GAME_DETAIL_ROUTES),
    PlayerStateModule,
    TicTacToeGameStateModule,
    LuxonModule,
    MatCardModule,
  ],
})
export class TicTacToeGameDetailModule {}
