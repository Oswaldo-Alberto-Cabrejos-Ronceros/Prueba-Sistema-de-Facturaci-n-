import { Component, HostBinding } from '@angular/core';
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";
import { TabBarComponent } from "../../components/tab-bar/tab-bar.component";
import { NavBarDropDownComponent } from "../../components/nav-bar-drop-down/nav-bar-drop-down.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-configurations-layout',
  imports: [RouterOutlet,NavBarUserComponent, TabBarComponent, NavBarDropDownComponent],
  templateUrl: './configurations-layout.component.html',
  styleUrl: './configurations-layout.component.css'
})
export class ConfigurationsLayoutComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col';
    //elementos para el menu
      menuItems: { to: string; title: string }[] = [
    {
      to: '/app/configurations/taxes',
      title: 'Impuestos',
    },
    {
      to: '/app/configurations/units',
      title: 'Unidades',
    },
    {
      to: '/app/configurations/currencies',
      title: 'Monedas',
    },
    {
      to: '/app/configurations/payment-methods',
      title: 'Pagos',
    },
    {
      to: '/app/configurations/clients',
      title: 'Series',
    },
    {
      to: '/app/configurations/business',
      title: 'Negocios',
    },
  ];
}
