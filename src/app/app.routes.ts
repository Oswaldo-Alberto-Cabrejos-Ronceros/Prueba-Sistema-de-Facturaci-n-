import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';

export const routes: Routes = [
    {path:'',redirectTo:'/auth/login',pathMatch:'full'},
  {
    path: 'auth',
    component: AuthLayoutComponent,

    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
            {
        path: 'registro',
        component: RegisterPageComponent,
      },
    ],
  },
];
