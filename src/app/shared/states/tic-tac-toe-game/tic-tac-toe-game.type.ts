import { DateTime } from 'luxon';

export interface TicTacToeGame {
  id: number;
  date: DateTime;
  player1Id: number;
  player2Id: number;
}
