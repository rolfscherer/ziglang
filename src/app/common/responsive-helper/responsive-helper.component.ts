import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-responsive-helper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-helper.component.html',
  styleUrls: ['./responsive-helper.component.scss']
})
export class ResponsiveHelperComponent {
  public env: any = environment;
}
