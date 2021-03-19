import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './routes/home.routes';

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
