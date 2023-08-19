import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubMenuItem} from "../../../../common/models/menu.model";
import {AngularSvgIconModule} from "angular-svg-icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'div[navbar-submenu]',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss']
})
export class NavbarSubmenuComponent {
  @Input() public submenu = <SubMenuItem[]>{};
}
