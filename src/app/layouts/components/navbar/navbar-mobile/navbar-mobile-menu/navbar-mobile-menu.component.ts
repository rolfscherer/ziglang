import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {MenuItem, SubMenuItem} from "../../../../../common/models/menu.model";
import {MenuService} from "../../../../services/menu.service";
import {NavbarMobileSubmenuComponent} from "../navbar-mobile-submenu/navbar-mobile-submenu.component";
import {AngularSvgIconModule} from "angular-svg-icon";

@Component({
  selector: 'app-navbar-mobile-menu',
  standalone: true,
  imports: [CommonModule, NavbarMobileSubmenuComponent, AngularSvgIconModule],
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrls: ['./navbar-mobile-menu.component.scss']
})
export class NavbarMobileMenuComponent {
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }

}
