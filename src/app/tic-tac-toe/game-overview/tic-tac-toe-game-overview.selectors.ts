import { Selector } from '@ngxs/store';
import { PlayerState } from 'src/app/shared/states/player/player.state';
import { PlayerStateModel } from 'src/app/shared/states/player/player.state-model';
import { Player } from 'src/app/shared/states/player/player.type';
import { TicTacToeGameState } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game.state';
import { TicTacToeGameStateModel } from 'src/app/shared/states/tic-tac-toe-game/tic-tac-toe-game.state-model';
import { TicTacToeGameItem } from './tic-tac-toe-game-item.type';

export class TicTacToeGameOverviewSelectors {
  private static getPlayerById(players: Player[], id: number): Player {
    const player = players.find((p) => p.id === id);
    if (player) {
      return player;
    }

    throw new Error(`Player with id ${id} not found.`);
  }

  @Selector([TicTacToeGameState, PlayerState])
  static games(ticTacToe: TicTacToeGameStateModel, player: PlayerStateModel): TicTacToeGameItem[] {
    return [...ticTacToe.data]
      .sort((x, y) => y.date.diff(x.date).milliseconds)
      .map((x) => {
        const player1 = TicTacToeGameOverviewSelectors.getPlayerById(player.data, x.player1Id);
        const player2 = TicTacToeGameOverviewSelectors.getPlayerById(player.data, x.player2Id);
        return {
          id: x.id,
          player1: { id: player1.id, name: player1.lastName },
          player2: { id: player2.id, name: player2.lastName },
          date: x.date,
        };
      });
  }
}
