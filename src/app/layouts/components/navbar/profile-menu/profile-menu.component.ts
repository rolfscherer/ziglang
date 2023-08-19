import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClickOutsideDirective} from "../../../../common/directives/click-outside.directive";

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
