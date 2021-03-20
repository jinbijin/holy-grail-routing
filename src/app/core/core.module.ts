import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CORE_ROUTES } from './core.routes';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [RouterModule.forRoot(CORE_ROUTES), MatDialogModule],
  exports: [RouterModule, RootComponent],
})
export class CoreModule {}
