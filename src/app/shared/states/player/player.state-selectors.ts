import { createSelector, Selector } from '@ngxs/store';
import { PlayerSummary } from './player-summary.type';
import { PlayerState } from './player.state';
import { PlayerStateModel } from './player.state-model';
import { Player } from './player.type';

export class PlayerStateSelectors {
  static mapToSummary(player: Player): PlayerSummary {
    const name = `${player.firstNames.map((firstName) => `${firstName[0]}.`).join(' ')} ${player.lastName}`;
    return {
      id: player.id,
      name,
    };
  }

  static byPlayerId(id: number) {
    return createSelector([PlayerStateSelectors.dataSet], (dataSet: Record<number, Player | undefined>) => {
      const player = dataSet[id];
      if (player) {
        return player;
      }
      throw new Error(`Player with ${id} not found.`);
    });
  }

  @Selector([PlayerState])
  static dataSet(state: PlayerStateModel): Record<number, Player | undefined> {
    return Object.fromEntries(state.data.map((p) => [p.id, p]));
  }
}
