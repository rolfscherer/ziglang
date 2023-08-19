import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./app/routes";
import {provideAnimations} from "@angular/platform-browser/animations";
import {AngularSvgIconModule} from "angular-svg-icon";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(AngularSvgIconModule.forRoot()),
    provideAnimations()]
}).catch(err => console.error(err));

