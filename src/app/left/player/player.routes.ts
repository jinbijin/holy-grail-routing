import { Routes } from '@angular/router';
import { PlayerDetailComponent } from './player-detail.component';

export const LEFT_PLAYER_ROUTES: Routes = [{ path: ':id', component: PlayerDetailComponent }];
