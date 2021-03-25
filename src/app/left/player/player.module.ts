import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LEFT_PLAYER_ROUTES } from './player.routes';

@NgModule({
  imports: [RouterModule.forChild(LEFT_PLAYER_ROUTES)],
})
export class LeftPlayerModule {}
