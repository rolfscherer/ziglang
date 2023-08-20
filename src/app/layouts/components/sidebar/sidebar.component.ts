import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {distinctUntilChanged, Observable, tap} from "rxjs";
import {MenuItem} from "../../../common/models/menu.model";
import {ThemeService} from "../../../common/services/theme.service";
import {MenuService} from "../../services/menu.service";
// @ts-ignore
import packageJson from "../../../../../package.json";
import {AngularSvgIconModule} from "angular-svg-icon";
import {SidebarMenuComponent} from "./sidebar-menu/sidebar-menu.component";
import {BreakpointObserver} from "@angular/cdk/layout";

const sm = '(min-width: 640px)';
const md = '(min-width: 768px)';
const lg = '(min-width: 1024px)';
const xl = '(min-width: 1280px)';
const xl2 = '(min-width: 1536px)';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, SidebarMenuComponent, NgOptimizedImage],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public appJson: any = packageJson;
  currentBreakpoint = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([xl2, xl, lg, md, sm])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );


  constructor(public themeService: ThemeService, private menuService: MenuService, private breakpointObserver: BreakpointObserver) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(xl2)) {
      this.currentBreakpoint = xl2;
    } else if(this.breakpointObserver.isMatched(xl)) {
      this.currentBreakpoint = xl;
    } else if(this.breakpointObserver.isMatched(lg)) {
      this.currentBreakpoint = lg;
    } else if(this.breakpointObserver.isMatched(md)) {
      this.currentBreakpoint = md;
    } else if(this.breakpointObserver.isMatched(sm)) {
      this.currentBreakpoint = sm;
    }
  }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
