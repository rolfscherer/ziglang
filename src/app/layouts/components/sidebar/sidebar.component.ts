import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {MenuItem} from "../../../common/models/menu.model";
import {ThemeService} from "../../../common/services/theme.service";
import {MenuService} from "../../services/menu.service";
// @ts-ignore
import packageJson from "../../../../../package.json";
import {AngularSvgIconModule} from "angular-svg-icon";
import {SidebarMenuComponent} from "./sidebar-menu/sidebar-menu.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public appJson: any = packageJson;

  constructor(public themeService: ThemeService, private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
