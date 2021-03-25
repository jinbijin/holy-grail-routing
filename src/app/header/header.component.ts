import { Component } from '@angular/core';
import { MenuLink } from './menu-link.type';

@Component({
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly menuItems: MenuLink[] = [
    { text: 'Home', routerLink: [{ outlets: { primary: 'home', left: null, right: null } }] },
    { text: 'Tic Tac Toe', routerLink: [{ outlets: { primary: 'tic-tac-toe', left: null, right: 'tic-tac-toe' } }] },
  ];
}
