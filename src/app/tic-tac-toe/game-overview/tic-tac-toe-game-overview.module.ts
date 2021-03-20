import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LuxonModule } from 'luxon-angular';
import { PlayerStateModule } from 'src/app/shared/states/player/player-state.module';
import { TicTacToeGameStateModule } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game-state.module';
import { TicTacToeGameOverviewComponent } from './tic-tac-toe-game-overview.component';
import { TIC_TAC_TOE_GAME_OVERVIEW_ROUTES } from './tic-tac-toe-game-overview.routes';

@NgModule({
  declarations: [TicTacToeGameOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TIC_TAC_TOE_GAME_OVERVIEW_ROUTES),
    PlayerStateModule,
    TicTacToeGameStateModule,
    MatListModule,
    LuxonModule,
  ],
})
export class TicTacToeGameOverviewModule {}
