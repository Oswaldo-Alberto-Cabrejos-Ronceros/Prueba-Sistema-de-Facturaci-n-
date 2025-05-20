import { Component, HostBinding } from '@angular/core';
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";
import { TabBarComponent } from "../../components/tab-bar/tab-bar.component";
import { NavBarDropDownComponent } from "../../components/nav-bar-drop-down/nav-bar-drop-down.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transactions-layout',
  imports: [RouterOutlet,NavBarUserComponent, TabBarComponent, NavBarDropDownComponent],
  templateUrl: './transactions-layout.component.html',
  styleUrl: './transactions-layout.component.css'
})
export class TransactionsLayoutComponent {
@HostBinding('class') class='flex-1 flex flex-col'
//elementos del menu  
menuItems: { to: string; title: string }[] = [
    {
      to: '/app/transactions',
      title: 'Transacciones',
    },
    {
      to: '/app/transactions/accounts',
      title: 'Cuentas',
    }
  ];
}
