import { NgModule } from '@angular/core';
import { RootModule } from './root/root.module';

@NgModule({
  imports: [RootModule],
  exports: [RootModule],
})
export class CoreModule {}
