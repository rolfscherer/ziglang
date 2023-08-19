import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubMenuItem} from "../../../../../common/models/menu.model";
import {MenuService} from "../../../../services/menu.service";
import {AngularSvgIconModule} from "angular-svg-icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar-mobile-submenu',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-mobile-submenu.component.html',
  styleUrls: ['./navbar-mobile-submenu.component.scss']
})
export class NavbarMobileSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
  }

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }

  public closeMobileMenu() {
    this.menuService.showMobileMenu = false;
  }
}
