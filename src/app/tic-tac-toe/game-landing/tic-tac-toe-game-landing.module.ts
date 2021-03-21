import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TIC_TAC_TOE_GAME_LANDING_ROUTES } from './tic-tac-toe-game-landing.routes';
import { TicTacToeGamePageComponent } from './tic-tac-toe-game-page.component';

@NgModule({
  declarations: [TicTacToeGamePageComponent],
  imports: [RouterModule.forChild(TIC_TAC_TOE_GAME_LANDING_ROUTES)],
})
export class TicTacToeGameLandingModule {}
