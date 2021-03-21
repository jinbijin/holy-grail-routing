import { createSelector } from '@ngxs/store';
import { PlayerStateSelectors } from 'src/app/shared/states/player/player.state-selectors';
import { Player } from 'src/app/shared/states/player/player.type';
import { TicTacToeGameStateSelectors } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game.state-selectors';
import { TicTacToeGame } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game.type';
import { TicTacToeGameDetail } from './tic-tac-toe-game-detail.type';

export class TicTacToeGameDetailSelectors {
  static gameSummaryById(
    id: number
  ): (game: TicTacToeGame, players: Record<number, Player | undefined>) => TicTacToeGameDetail {
    return createSelector(
      [TicTacToeGameStateSelectors.byGameId(id), PlayerStateSelectors.dataSet],
      (game: TicTacToeGame, players: Record<number, Player | undefined>) => {
        const player1 = PlayerStateSelectors.mapToSummary(PlayerStateSelectors.byPlayerId(game.player1Id)(players));
        const player2 = PlayerStateSelectors.mapToSummary(PlayerStateSelectors.byPlayerId(game.player2Id)(players));
        return {
          player1,
          player2,
          date: game.date,
        };
      }
    );
  }
}
