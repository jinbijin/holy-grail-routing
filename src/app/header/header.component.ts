import { Component } from '@angular/core';
import { MenuLink } from './menu-link.type';

@Component({
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly menuItems: MenuLink[] = [{ text: 'Home', routerLink: ['home'] }];
}
