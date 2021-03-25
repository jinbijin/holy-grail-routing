import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RIGHT_ROUTES } from './right.routes';

@NgModule({
  imports: [RouterModule.forChild(RIGHT_ROUTES)],
})
export class RightModule {}
