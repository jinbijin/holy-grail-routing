import { Routes } from '@angular/router';

export const LEFT_ROUTES: Routes = [
  { path: 'player', loadChildren: () => import('./player/player.module').then((m) => m.LeftPlayerModule) },
];
