import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { RestorePasswordPageComponent } from '../pages/restore-password-page/restore-password-page.component';
import { PrincipalLayoutComponent } from '../layouts/principal-layout/principal-layout.component';
//ventas
import { SalesLayoutComponent } from '../layouts/sales-layout/sales-layout.component';
import { SalesPageComponent } from '../pages/sales-page/sales-page.component';
import { BillingPageComponent } from '../pages/billing-page/billing-page.component';
import { QuotationsPageComponent } from '../pages/quotations-page/quotations-page.component';
//compras
import { PurchasesLayoutComponent } from '../layouts/purchases-layout/purchases-layout.component';
import { PurchasesPageComponent } from '../pages/purchases-page/purchases-page.component';
import { WarehousePageComponent } from '../pages/warehouse-page/warehouse-page.component';

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
      }, {
        path: 'restore-password',
        component: RestorePasswordPageComponent,
      },
    ],
  },
  {
    path:'app',
    component:PrincipalLayoutComponent,
    children:[      {
        path: 'sales',
        component: SalesLayoutComponent,
        children:[
          {
            path:'',
            component:SalesPageComponent
          },
                    {
            path:'billing',
            component:BillingPageComponent
          },
                              {
            path:'quotations',
            component:QuotationsPageComponent
          }
        ]
      },
      {
        path:'purchases',
        component:PurchasesLayoutComponent,
        children:[
          {
            path:'',
            component:PurchasesPageComponent
          },
          {
            path:'warehouse',
            component:WarehousePageComponent
          }
        ]
      }
    ]
  },
];
