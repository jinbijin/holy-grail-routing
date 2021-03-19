import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './components/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [RouterModule],
  exports: [RootComponent],
})
export class RootModule {}
