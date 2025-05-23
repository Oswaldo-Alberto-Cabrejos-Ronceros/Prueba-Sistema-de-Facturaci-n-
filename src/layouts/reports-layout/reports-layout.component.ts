import { Component, HostBinding } from '@angular/core';
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";
import { NavBarDropDownComponent } from "../../components/nav-bar-drop-down/nav-bar-drop-down.component";
import { TabBarComponent } from "../../components/tab-bar/tab-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reports-layout',
  imports: [NavBarUserComponent, NavBarDropDownComponent, TabBarComponent,RouterOutlet],
  templateUrl: './reports-layout.component.html',
  styleUrl: './reports-layout.component.css',
})
export class ReportsLayoutComponent {
  //elementos para el menu
  @HostBinding('class') class = 'flex-1 flex flex-col';
  menuItems: { to: string; title: string }[] = [
    {
      to: '/app/reports',
      title: 'Reportes',
    },
    {
      to: '/app/reports/day',
      title: 'Hoy',
    },
    {
      to: '/app/reports/products',
      title: 'Productos',
    },
    {
      to: '/app/reports/kardex',
      title: 'Kardex',
    },
    {
      to: '/app/reports/accounting',
      title: 'Contables',
    },
    {
      to: '/app/reports/clients',
      title: 'Clientes',
    },
    {
      to: '/app/reports/downloads',
      title: 'Descargas',
    },
  ];
}
