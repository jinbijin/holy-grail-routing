import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicTacToeGamePageComponent } from './tic-tac-toe-page.component';
import { TIC_TAC_TOE_PAGE_ROUTES } from './tic-tac-toe-page.routes';

@NgModule({
  declarations: [TicTacToeGamePageComponent],
  imports: [RouterModule.forChild(TIC_TAC_TOE_PAGE_ROUTES)],
})
export class TicTacToePageModule {}
