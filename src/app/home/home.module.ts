import { NgModule } from '@angular/core';
import { HomePageModule } from './page/home-page.module';
import { HomeRoutingModule } from './routing/home-routing.module';

@NgModule({
  imports: [HomeRoutingModule, HomePageModule],
})
export class HomeModule {}
