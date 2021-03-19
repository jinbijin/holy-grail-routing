import { Routes } from '@angular/router';
import { HomeModalCountComponent } from './components/home-modal.component';

export const HOME_MODAL_ROUTES: Routes = [{ path: '', component: HomeModalCountComponent, pathMatch: 'full' }];
