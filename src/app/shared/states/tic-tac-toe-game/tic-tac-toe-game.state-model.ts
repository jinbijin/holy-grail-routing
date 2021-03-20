import { DateTime } from 'luxon';
import { TicTacToeGame } from './tic-tac-toe-game.type';

export interface TicTacToeGameStateModel {
  data: TicTacToeGame[];
}

export const TIC_TAC_TOE_GAME_STATE_DEFAULTS: TicTacToeGameStateModel = {
  data: [
    { id: 1, date: DateTime.now().minus({ weeks: 11 }), player1Id: 1, player2Id: 2 },
    { id: 2, date: DateTime.now().minus({ months: 2 }), player1Id: 3, player2Id: 4 },
    { id: 3, date: DateTime.now().minus({ days: 43 }), player1Id: 5, player2Id: 2 },
  ],
};
