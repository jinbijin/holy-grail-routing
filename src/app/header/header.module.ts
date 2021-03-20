import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HEADER_ROUTES } from './header.routes';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(HEADER_ROUTES), MatButtonModule, MatToolbarModule],
})
export class HeaderModule {}
