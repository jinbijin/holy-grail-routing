import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerStateModule } from 'src/app/shared/states/player/player-state.module';
import { UtilityModule } from 'src/app/shared/utility/utility.module';
import { PlayerDetailComponent } from './player-detail.component';
import { LEFT_PLAYER_ROUTES } from './player.routes';

@NgModule({
  declarations: [PlayerDetailComponent],
  imports: [CommonModule, RouterModule.forChild(LEFT_PLAYER_ROUTES), PlayerStateModule, UtilityModule],
})
export class LeftPlayerModule {}
