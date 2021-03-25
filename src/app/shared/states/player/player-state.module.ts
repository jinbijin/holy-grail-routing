import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PlayerNamePipe } from './player-name.pipe';
import { PlayerState } from './player.state';

@NgModule({
  declarations: [PlayerNamePipe],
  imports: [NgxsModule.forFeature([PlayerState])],
  exports: [NgxsModule, PlayerNamePipe],
})
export class PlayerStateModule {}
