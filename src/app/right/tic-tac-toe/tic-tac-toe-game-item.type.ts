import { DateTime } from 'luxon';
import { PlayerSummary } from 'src/app/shared/states/player/player-summary.type';

export interface TicTacToeGameItem {
  id: number;
  date: DateTime;
  player1: PlayerSummary;
  player2: PlayerSummary;
}
