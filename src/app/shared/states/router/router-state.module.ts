import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterStateService } from './router-state.service';

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: [RouterStateService],
})
export class RouterStateModule {}
