import {Routes} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
      },
      {
        path: 'sass',
        loadChildren: () => import('./sass/routes').then(m => m.SASS_ROUTES)
      },
    ],
  },
]
