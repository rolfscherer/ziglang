import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {MenuItem, SubMenuItem} from "../../../../common/models/menu.model";
import {MenuService} from "../../../services/menu.service";
import {AngularSvgIconModule} from "angular-svg-icon";
import {SidebarSubmenuComponent} from "../sidebar-submenu/sidebar-submenu.component";

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, SidebarSubmenuComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent {
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }


}
