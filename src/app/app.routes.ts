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
//productos
import { ProductsLayoutComponent } from '../layouts/products-layout/products-layout.component';
import { ProductsPageComponent } from '../pages/products-page/products-page.component';
import { PackagesPageComponent } from '../pages/packages-page/packages-page.component';
import { ProductCategoriesPageComponent } from '../pages/product-categories-page/product-categories-page.component';
//clientes/ provedores
import { ClientsProvidersLayoutComponent } from '../layouts/clients-providers-layout/clients-providers-layout.component';
import { ClientsPageComponent } from '../pages/clients-page/clients-page.component';
import { UsersLayoutComponent } from '../layouts/users-layout/users-layout.component';
import { UsersPageComponent } from '../pages/users-page/users-page.component';
// montos
import { ExpensesLayoutComponent } from '../layouts/expenses-layout/expenses-layout.component';
import { ExpensesPageComponent } from '../pages/expenses-page/expenses-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
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
      {
        path: 'restore-password',
        component: RestorePasswordPageComponent,
      },
    ],
  },
  {
    path: 'app',
    component: PrincipalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'sales',
        pathMatch: 'full',
      },
      {
        path: 'sales',
        component: SalesLayoutComponent,
        children: [
          {
            path: '',
            component: SalesPageComponent,
          },
          {
            path: 'billing',
            component: BillingPageComponent,
          },
          {
            path: 'quotations',
            component: QuotationsPageComponent,
          },
        ],
      },
      {
        path: 'purchases',
        component: PurchasesLayoutComponent,
        children: [
          {
            path: '',
            component: PurchasesPageComponent,
          },
          {
            path: 'warehouse',
            component: WarehousePageComponent,
          },
        ],
      },
      {
        path: 'products',
        component: ProductsLayoutComponent,
        children: [
          {
            path: '',
            component: ProductsPageComponent,
          },
          {
            path: 'packages',
            component: PackagesPageComponent,
          },
          {
            path: 'categories',
            component: ProductCategoriesPageComponent,
          },
        ],
      },
      {
        path: 'clients',
        component: ClientsProvidersLayoutComponent,
        children: [
          {
            path: '',
            component: ClientsPageComponent,
          },
        ],
      },
      {
        path:'users',
        component:UsersLayoutComponent,
        children:[
          {
            path:'',
            component:UsersPageComponent
          }
        ]
      },
      {
        path:'expenses',
        component:ExpensesLayoutComponent,
        children:[
          {
            path:'',
            component:ExpensesPageComponent
          }
        ]
      }
    ],
  },
];
