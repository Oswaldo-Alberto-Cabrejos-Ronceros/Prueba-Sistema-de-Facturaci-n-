import { Component, HostBinding } from '@angular/core';
import { NavBarDropDownComponent } from "../../components/nav-bar-drop-down/nav-bar-drop-down.component";
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from "../../components/tab-bar/tab-bar.component";
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";

@Component({
  selector: 'app-purchases-layout',
  imports: [NavBarDropDownComponent, RouterOutlet, TabBarComponent, NavBarUserComponent],
  templateUrl: './purchases-layout.component.html',
  styleUrl: './purchases-layout.component.css'
})
export class PurchasesLayoutComponent {
@HostBinding('class') class='flex-1 flex flex-col'
//elementos del menu  
menuItems: { to: string; title: string }[] = [
    {
      to: '/app/purchases',
      title: 'Compras',
    },
    {
      to: '/app/purchases/warehouse',
      title: 'Almacén',
    }
  ];
}
