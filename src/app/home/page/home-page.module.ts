import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent],
  imports: [RouterModule, MatButtonModule],
})
export class HomePageModule {}
