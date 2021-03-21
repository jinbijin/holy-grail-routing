import { createSelector, Selector } from '@ngxs/store';
import { TicTacToeGameState } from './tic-tac-toe-game.state';
import { TicTacToeGameStateModel } from './tic-tac-toe-game.state-model';
import { TicTacToeGame } from './tic-tac-toe-game.type';

export class TicTacToeGameStateSelectors {
  static byGameId(id: number) {
    return createSelector(
      [TicTacToeGameStateSelectors.dataSet],
      (dataSet: Record<number, TicTacToeGameStateModel | undefined>) => {
        const game = dataSet[id];
        if (game) {
          return game;
        }
        throw new Error(`Game with ${id} not found.`);
      }
    );
  }

  @Selector([TicTacToeGameState])
  static dataSet(state: TicTacToeGameStateModel): Record<number, TicTacToeGame | undefined> {
    return Object.fromEntries(state.data.map((g) => [g.id, g]));
  }
}
