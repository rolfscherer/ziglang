import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MenuService} from "../../services/menu.service";
import {NavbarMenuComponent} from "./navbar-menu/navbar-menu.component";
import {ProfileMenuComponent} from "./profile-menu/profile-menu.component";
import {NavbarMobileComponent} from "./navbar-mobile/navbar-mobile.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {ThemeService} from "../../../common/services/theme.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarMenuComponent, ProfileMenuComponent, NavbarMobileComponent, AngularSvgIconModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private menuService: MenuService, public themeService: ThemeService) {
  }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
