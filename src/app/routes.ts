import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: AppComponent},
      // {
      //   path: 'admin',
      //   loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
      // },
      // {
      //   path: 'sass',
      //   loadChildren: () => import('./sass/routes').then(m => m.SASS_ROUTES)
      // },
    ],
  },
]
