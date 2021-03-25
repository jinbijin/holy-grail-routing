import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LEFT_ROUTES } from './left.routes';

@NgModule({
  imports: [RouterModule.forChild(LEFT_ROUTES)],
})
export class LeftModule {}
