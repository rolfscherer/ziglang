import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {MenuService} from "../../../services/menu.service";
import {AngularSvgIconModule} from "angular-svg-icon";

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  public showMobileMenu$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showMobileMenu$ = this.menuService.showMobileMenu$;
  }

  ngOnInit(): void {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
