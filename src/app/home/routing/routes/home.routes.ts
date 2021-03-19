import { Routes } from '@angular/router';
import { HomePageComponent } from '../../page/components/home-page.component';

export const HOME_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'modal',
    outlet: 'modal',
    loadChildren: () => import('../../modal/home-modal.module').then((m) => m.HomeModalModule),
  },
];
