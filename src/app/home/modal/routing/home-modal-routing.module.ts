import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_MODAL_ROUTES } from './routes/home-modal.routes';

@NgModule({
  imports: [RouterModule.forChild(HOME_MODAL_ROUTES)],
  exports: [RouterModule],
})
export class HomeModalRoutingModule {}
