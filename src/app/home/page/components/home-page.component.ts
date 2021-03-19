import { Component } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  readonly modalLink: string | any[] = [{ outlets: { modal: ['modal'] } }];
}
