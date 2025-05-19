import { Component, HostBinding } from '@angular/core';
import { TabBarComponent } from '../../components/tab-bar/tab-bar.component';
import { NavBarUserComponent } from '../../components/nav-bar-user/nav-bar-user.component';
import { RouterOutlet } from '@angular/router';
import { NavBarDropDownComponent } from "../../components/nav-bar-drop-down/nav-bar-drop-down.component";

@Component({
  selector: 'app-sales-layout',
  imports: [TabBarComponent, NavBarUserComponent, RouterOutlet, NavBarDropDownComponent],
  templateUrl: './sales-layout.component.html',
  styleUrl: './sales-layout.component.css',
})
export class SalesLayoutComponent {
  //elementos para el menu
@HostBinding('class') class='flex-1 flex flex-col'
  menuItems: { to: string; title: string }[] = [
    {
      to: '/app/sales',
      title: 'Ventas',
    },
    {
      to: '/app/sales/billing',
      title: 'Facturación',
    },
    {
      to: '/app/sales/quotations',
      title: 'Cotizaciones',
    },
  ];
}
