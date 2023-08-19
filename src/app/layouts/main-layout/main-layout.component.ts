import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from "../components/sidebar/sidebar.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

}
