import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RootComponent } from './components/root.component';
import { CORE_ROUTES } from './core.routes';

@NgModule({
  declarations: [RootComponent],
  imports: [RouterModule.forRoot(CORE_ROUTES), MatDialogModule],
  exports: [RouterModule, RootComponent],
})
export class CoreModule {}
