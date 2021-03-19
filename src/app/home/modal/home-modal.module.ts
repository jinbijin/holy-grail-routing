import { NgModule } from '@angular/core';
import { HomeModalCountModule } from './count/home-modal-count.module';
import { HomeModalRoutingModule } from './routing/home-modal-routing.module';

@NgModule({
  imports: [HomeModalRoutingModule, HomeModalCountModule],
})
export class HomeModalModule {}
