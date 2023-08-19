import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardComponent },
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
