import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TicTacToeGameDetailSelectors } from './tic-tac-toe-game-detail.selectors';
import { TicTacToeGameDetail } from './tic-tac-toe-game-detail.type';

@Component({
  templateUrl: './tic-tac-toe-game-detail.component.html',
  styleUrls: ['./tic-tac-toe-game-detail.component.scss'],
})
export class TicTacToeGameDetailComponent {
  readonly game$: Observable<TicTacToeGameDetail>;

  constructor(activatedRoute: ActivatedRoute, store: Store, private readonly router: Router) {
    this.game$ = activatedRoute.paramMap.pipe(
      map((paramMap) => +(paramMap.get('id') ?? '0')),
      switchMap((id) => store.select(TicTacToeGameDetailSelectors.gameSummaryById(id)))
    );
  }

  openPlayerSidebar(playerId: number): void {
    this.router.navigate(['/', { outlets: { left: ['player', playerId] } }]);
  }
}
