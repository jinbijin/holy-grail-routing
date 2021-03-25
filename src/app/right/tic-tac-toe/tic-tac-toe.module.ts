import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LuxonModule } from 'luxon-angular';
import { PlayerStateModule } from 'src/app/shared/states/player/player-state.module';
import { TicTacToeGameStateModule } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game-state.module';
import { TicTacToeGameListComponent } from './tic-tac-toe-game-list.component';
import { RIGHT_TIC_TAC_TOE_ROUTES } from './tic-tac-toe.routes';

@NgModule({
  declarations: [TicTacToeGameListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RIGHT_TIC_TAC_TOE_ROUTES),
    PlayerStateModule,
    TicTacToeGameStateModule,
    MatListModule,
    LuxonModule,
  ],
})
export class RightTicTacToeModule {}
