import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TicTacToeGameItem } from './tic-tac-toe-game-item.type';
import { TicTacToeGameOverviewSelectors } from './tic-tac-toe-game-overview.selectors';

@Component({
  templateUrl: './tic-tac-toe-game-overview.component.html',
})
export class TicTacToeGameOverviewComponent {
  @Select(TicTacToeGameOverviewSelectors.games)
  readonly games!: Observable<TicTacToeGameItem[]>;
}
