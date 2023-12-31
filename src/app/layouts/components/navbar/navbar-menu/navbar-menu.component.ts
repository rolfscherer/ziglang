import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {MenuItem} from "../../../../common/models/menu.model";
import {MenuService} from "../../../services/menu.service";
import {NavbarSubmenuComponent} from "../navbar-submenu/navbar-submenu.component";

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [CommonModule, NavbarSubmenuComponent],
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent {
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();

  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  constructor(private menuService: MenuService) {
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }

  public mouseEnter(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.hideMenuClass.forEach((c) => element.classList.remove(c));
      this.showMenuClass.forEach((c) => element.classList.add(c));
    }
  }

  public mouseLeave(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.showMenuClass.forEach((c) => element.classList.remove(c));
      this.hideMenuClass.forEach((c) => element.classList.add(c));
    }
  }
}
