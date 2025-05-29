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
import { AddEditSalePageComponent } from '../pages/add-edit-sale-page/add-edit-sale-page.component';
//compras
import { PurchasesLayoutComponent } from '../layouts/purchases-layout/purchases-layout.component';
import { PurchasesPageComponent } from '../pages/purchases-page/purchases-page.component';
import { WarehousePageComponent } from '../pages/warehouse-page/warehouse-page.component';
//productos
import { ProductsLayoutComponent } from '../layouts/products-layout/products-layout.component';
import { ProductsPageComponent } from '../pages/products-page/products-page.component';
import { PackagesPageComponent } from '../pages/packages-page/packages-page.component';
import { ProductCategoriesPageComponent } from '../pages/product-categories-page/product-categories-page.component';
//reportes
import { ReportsLayoutComponent } from '../layouts/reports-layout/reports-layout.component';
//clientes/ provedores
import { ClientsProvidersLayoutComponent } from '../layouts/clients-providers-layout/clients-providers-layout.component';
import { ClientsPageComponent } from '../pages/clients-page/clients-page.component';
import { UsersLayoutComponent } from '../layouts/users-layout/users-layout.component';
import { UsersPageComponent } from '../pages/users-page/users-page.component';
// montos
import { ExpensesLayoutComponent } from '../layouts/expenses-layout/expenses-layout.component';
import { ExpensesPageComponent } from '../pages/expenses-page/expenses-page.component';
// transacciones
import { TransactionsLayoutComponent } from '../layouts/transactions-layout/transactions-layout.component';
import { TransactionsPageComponent } from '../pages/transactions-page/transactions-page.component';
import { TransactionsAccountsPageComponent } from '../pages/transactions-accounts-page/transactions-accounts-page.component';
import { ReportsPageComponent } from '../pages/reports-page/reports-page.component';
import { ReportsTodayPageComponent } from '../pages/reports-today-page/reports-today-page.component';
import { ReportsKardexPageComponent } from '../pages/reports-kardex-page/reports-kardex-page.component';
import { ReportsAccountingPageComponent } from '../pages/reports-accounting-page/reports-accounting-page.component';
import { ReportsClientsPageComponent } from '../pages/reports-clients-page/reports-clients-page.component';
import { ReportsDownloadsPageComponent } from '../pages/reports-downloads-page/reports-downloads-page.component';
import { ReportsProductsPageComponent } from '../pages/reports-products-page/reports-products-page.component';
//configurations
import { ConfigurationsLayoutComponent } from '../layouts/configurations-layout/configurations-layout.component';
import { ConfigurationsTaxesPageComponent } from '../pages/configurations-taxes-page/configurations-taxes-page.component';
import { ConfigurationsUnitsPageComponent } from '../pages/configurations-units-page/configurations-units-page.component';
import { ConfigurationsCurrenciesPageComponent } from '../pages/configurations-currencies-page/configurations-currencies-page.component';
import { ConfigurationsPaymentMethodsPageComponent } from '../pages/configurations-payment-methods-page/configurations-payment-methods-page.component';
import { ConfigurationsSerialsPageComponent } from '../pages/configurations-serials-page/configurations-serials-page.component';
import { ConfigurationsBusinessPageComponent } from '../pages/configurations-business-page/configurations-business-page.component';

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
          {
            path:'add-edit',
            component:AddEditSalePageComponent
          }
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
        path: 'users',
        component: UsersLayoutComponent,
        children: [
          {
            path: '',
            component: UsersPageComponent,
          },
        ],
      },
      {
        path: 'expenses',
        component: ExpensesLayoutComponent,
        children: [
          {
            path: '',
            component: ExpensesPageComponent,
          },
        ],
      },
      {
        path: 'transactions',
        component: TransactionsLayoutComponent,
        children: [
          {
            path: '',
            component: TransactionsPageComponent,
          },
          {
            path: 'accounts',
            component: TransactionsAccountsPageComponent,
          },
        ],
      },
      {
        path: 'reports',
        component: ReportsLayoutComponent,
        children: [
          {
            path: '',
            component: ReportsPageComponent,
          },
          {
            path: 'today',
            component: ReportsTodayPageComponent,
          },
          {
            path: 'products',
            component: ReportsProductsPageComponent,
          },
          {
            path: 'kardex',
            component: ReportsKardexPageComponent,
          },
          {
            path: 'accounting',
            component: ReportsAccountingPageComponent,
          },
          {
            path: 'clients',
            component: ReportsClientsPageComponent,
          },
          {
            path: 'downloads',
            component: ReportsDownloadsPageComponent,
          },
        ],
      },
      {
        path: 'configurations',
        component: ConfigurationsLayoutComponent,
        children: [
          {
            path:'',
            redirectTo:'//app/configurations/taxes',
            pathMatch:'full'
          },
          {
            path: 'taxes',
            component: ConfigurationsTaxesPageComponent,
          },
          {
            path: 'units',
            component: ConfigurationsUnitsPageComponent,
          },
          {
            path: 'currencies',
            component: ConfigurationsCurrenciesPageComponent,
          },
          {
            path: 'payment-methods',
            component: ConfigurationsPaymentMethodsPageComponent,
          },
          {
            path: 'serials',
            component: ConfigurationsSerialsPageComponent,
          },
          {
            path: 'business',
            component: ConfigurationsBusinessPageComponent,
          },
        ],
      },
    ],
  },
];
