import { Pipe, PipeTransform } from '@angular/core';
import { PlayerStateSelectors } from './player.state-selectors';
import { Player } from './player.type';

@Pipe({ name: 'playerName' })
export class PlayerNamePipe implements PipeTransform {
  transform(value: Player): string {
    return PlayerStateSelectors.mapToSummary(value).name;
  }
}
