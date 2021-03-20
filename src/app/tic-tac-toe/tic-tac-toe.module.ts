import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TIC_TAC_TOE_ROUTES } from './tic-tac-toe.routes';

@NgModule({
  imports: [RouterModule.forChild(TIC_TAC_TOE_ROUTES)],
})
export class TicTacToeModule {}
