import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ModalLoaderDirective } from './modal-loader.directive';

@NgModule({
  declarations: [ModalLoaderDirective],
  imports: [MatDialogModule, RouterModule],
  exports: [ModalLoaderDirective],
})
export class ModalLoaderModule {}
