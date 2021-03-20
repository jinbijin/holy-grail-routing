import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './tic-tac-toe-game-detail.component.html',
})
export class TicTacToeGameDetailComponent {
  readonly id$: Observable<number>;

  constructor(activatedRoute: ActivatedRoute) {
    this.id$ = activatedRoute.paramMap.pipe(map((paramMap) => +(paramMap.get('id') ?? '0')));
  }
}
