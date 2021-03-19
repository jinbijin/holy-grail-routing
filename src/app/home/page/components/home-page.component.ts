import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  readonly modalLink: string | any[] = [{ outlets: { modal: ['modal'] } }];
}
