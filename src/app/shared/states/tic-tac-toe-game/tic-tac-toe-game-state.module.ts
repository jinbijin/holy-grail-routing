import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TicTacToeGameState } from './tic-tac-toe-game.state';

@NgModule({
  imports: [NgxsModule.forFeature([TicTacToeGameState])],
  exports: [NgxsModule],
})
export class TicTacToeGameStateModule {}
