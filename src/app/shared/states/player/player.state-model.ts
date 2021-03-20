import { Player } from './player.type';

export interface PlayerStateModel {
  data: Player[];
}

export const PLAYER_STATE_DEFAULTS: PlayerStateModel = {
  data: [
    { id: 1, firstNames: ['Charlie'], lastName: 'Ross', country: 'USA' },
    { id: 2, firstNames: ['Otto'], lastName: 'Ooe', country: 'Germany' },
    { id: 3, firstNames: ['Emma'], lastName: 'Wilson', country: 'Scotland' },
    { id: 4, firstNames: ['Stephen', 'Thomas'], lastName: 'Rowe', country: 'USA' },
    { id: 5, firstNames: ['Jean', 'Anne'], lastName: 'Mill', country: 'England' },
  ],
};
