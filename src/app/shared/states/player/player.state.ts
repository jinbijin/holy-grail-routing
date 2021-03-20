import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { PlayerStateModel, PLAYER_STATE_DEFAULTS } from './player.state-model';

@State<PlayerStateModel>({ name: 'player', defaults: PLAYER_STATE_DEFAULTS })
@Injectable()
export class PlayerState {}
