import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ModalLoaderModule } from 'src/app/shared/modal-loader/modal-loader.module';
import { HomeModalCountComponent } from './components/home-modal.component';
import { HOME_MODAL_ROUTES } from './home-modal.routes';

@NgModule({
  declarations: [HomeModalCountComponent],
  imports: [ModalLoaderModule, RouterModule.forChild(HOME_MODAL_ROUTES), MatDialogModule],
})
export class HomeModalModule {}
