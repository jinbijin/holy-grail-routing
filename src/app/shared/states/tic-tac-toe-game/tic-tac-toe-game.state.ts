import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { TicTacToeGameStateModel, TIC_TAC_TOE_GAME_STATE_DEFAULTS } from './tic-tac-toe-game.state-model';

@State<TicTacToeGameStateModel>({ name: 'ticTacToeGame', defaults: TIC_TAC_TOE_GAME_STATE_DEFAULTS })
@Injectable()
export class TicTacToeGameState {}
