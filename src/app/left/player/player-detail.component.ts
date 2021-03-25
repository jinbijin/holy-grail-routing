import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerStateSelectors } from 'src/app/shared/states/player/player.state-selectors';
import { Player } from 'src/app/shared/states/player/player.type';

@Component({
  templateUrl: './player-detail.component.html',
})
export class PlayerDetailComponent {
  readonly player$: Observable<Player>;
  constructor(activatedRoute: ActivatedRoute, store: Store) {
    this.player$ = activatedRoute.paramMap.pipe(
      map((paramMap) => +(paramMap.get('id') ?? '0')),
      switchMap((id) => store.select(PlayerStateSelectors.byPlayerId(id)))
    );
  }
}
