import { DateTime } from 'luxon';

export interface TicTacToeGameItem {
  id: number;
  date: DateTime;
  player1: { id: number; name: string };
  player2: { id: number; name: string };
}
