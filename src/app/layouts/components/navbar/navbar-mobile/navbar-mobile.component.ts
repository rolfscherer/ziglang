import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Observable} from "rxjs";
import {MenuService} from "../../../services/menu.service";
import {AngularSvgIconModule} from "angular-svg-icon";
import {NavbarMobileMenuComponent} from "./navbar-mobile-menu/navbar-mobile-menu.component";
import {ThemeService} from "../../../../common/services/theme.service";

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, NavbarMobileMenuComponent, NgOptimizedImage],
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  public showMobileMenu$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService, public themeService: ThemeService) {
    this.showMobileMenu$ = this.menuService.showMobileMenu$;
  }

  ngOnInit(): void {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
