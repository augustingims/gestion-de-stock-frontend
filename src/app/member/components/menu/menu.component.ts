import { Component, OnInit } from '@angular/core';
import { Menu } from './Menu';
import { menuProperties } from '../../shared';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menus = menuProperties;
  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void{
    this.router.navigate([url]);
  }

  navigateWithLast(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

}
