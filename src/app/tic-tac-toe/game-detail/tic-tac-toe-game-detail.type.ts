import { DateTime } from 'luxon';
import { PlayerSummary } from 'src/app/shared/states/player/player-summary.type';

export interface TicTacToeGameDetail {
  date: DateTime;
  player1: PlayerSummary;
  player2: PlayerSummary;
}
