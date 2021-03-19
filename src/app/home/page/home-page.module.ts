import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HOME_PAGE_ROUTES } from './home-page.routes';

@NgModule({
  declarations: [HomePageComponent],
  imports: [RouterModule.forChild(HOME_PAGE_ROUTES), MatButtonModule],
})
export class HomePageModule {}
