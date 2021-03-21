import { Selector } from '@ngxs/store';
import { PlayerStateSelectors } from 'src/app/shared/states/player/player.state-selectors';
import { Player } from 'src/app/shared/states/player/player.type';
import { TicTacToeGameState } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game.state';
import { TicTacToeGameStateModel } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game.state-model';
import { TicTacToeGameItem } from './tic-tac-toe-game-item.type';

export class TicTacToeGameOverviewSelectors {
  @Selector([TicTacToeGameState, PlayerStateSelectors.dataSet])
  static games(ticTacToe: TicTacToeGameStateModel, players: Record<number, Player>): TicTacToeGameItem[] {
    return [...ticTacToe.data]
      .sort((x, y) => y.date.diff(x.date).milliseconds)
      .map((x) => {
        const player1 = PlayerStateSelectors.mapToSummary(PlayerStateSelectors.byPlayerId(x.player1Id)(players));
        const player2 = PlayerStateSelectors.mapToSummary(PlayerStateSelectors.byPlayerId(x.player2Id)(players));
        return {
          id: x.id,
          player1,
          player2,
          date: x.date,
        };
      });
  }
}
