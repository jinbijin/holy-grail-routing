import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TicTacToeGameItem } from './tic-tac-toe-game-item.type';
import { TicTacToeGameListSelectors } from './tic-tac-toe-game-list.selectors';

@Component({
  templateUrl: './tic-tac-toe-game-list.component.html',
})
export class TicTacToeGameListComponent {
  @Select(TicTacToeGameListSelectors.games)
  readonly games$!: Observable<TicTacToeGameItem[]>;

  detailLink(id: number): string | any[] {
    return ['/', { outlets: { primary: ['tic-tac-toe', id], left: null } }];
  }
}
