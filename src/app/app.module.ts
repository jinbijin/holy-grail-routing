import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { RootComponent } from './core/root/components/root.component';
import { RoutingModule } from './core/routing/routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RoutingModule, CoreModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
