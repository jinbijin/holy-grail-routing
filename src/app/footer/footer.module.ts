import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { FOOTER_ROUTES } from './footer.routes';

@NgModule({
  declarations: [FooterComponent],
  imports: [RouterModule.forChild(FOOTER_ROUTES), MatToolbarModule],
})
export class FooterModule {}
