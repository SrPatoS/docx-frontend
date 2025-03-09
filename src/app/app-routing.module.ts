import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { CompanyToolPageComponent } from './pages/company-tool-page/company-tool-page.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationPageComponent,
    children: [
      /*{
        path: 'dashboard',
        component: CompanyToolPageComponent
      },*/
      {
        path: 'settings/tools/companies',
        component: CompanyToolPageComponent
      }
    ]
  },
  {
    path: 'login',
    component: AuthPageComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
