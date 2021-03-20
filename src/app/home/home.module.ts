import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { HOME_ROUTES } from './home.routes';

@NgModule({
  declarations: [HomePageComponent],
  imports: [RouterModule.forChild(HOME_ROUTES), MatButtonModule],
})
export class HomeModule {}
