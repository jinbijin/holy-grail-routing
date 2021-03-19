import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { HomeModalCountComponent } from './components/home-modal.component';
import { HOME_MODAL_ROUTES } from './home-modal.routes';

@NgModule({
  declarations: [HomeModalCountComponent],
  imports: [RouterModule.forChild(HOME_MODAL_ROUTES), MatDialogModule],
})
export class HomeModalModule {}
