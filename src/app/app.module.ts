import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { RootComponent } from './core/components/root.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule],
  bootstrap: [RootComponent],
})
export class AppModule {}
