import { Routes } from '@angular/router';
import { HomeModalCountComponent } from '../../count/components/home-modal-count.component';

export const HOME_MODAL_ROUTES: Routes = [{ path: '', component: HomeModalCountComponent, pathMatch: 'full' }];
