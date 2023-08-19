import {Component} from '@angular/core';
import {NgClass, NgSwitch} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {ResponsiveHelperComponent} from "./common/responsive-helper/responsive-helper.component";
import {ThemeService} from "./common/services/theme.service";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgSwitch,
    RouterOutlet,
    ResponsiveHelperComponent,
    NgClass
  ]
})
export class AppComponent {
  constructor(public themeService: ThemeService) {
  }
}
