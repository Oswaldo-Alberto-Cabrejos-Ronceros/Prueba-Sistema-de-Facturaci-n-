import { Component, HostBinding } from '@angular/core';
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";
import { TabBarComponent } from "../../components/tab-bar/tab-bar.component";
import { NavBarDropDownComponent } from "../../components/nav-bar-drop-down/nav-bar-drop-down.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products-layout',
  imports: [NavBarUserComponent, TabBarComponent, NavBarDropDownComponent,RouterOutlet],
  templateUrl: './products-layout.component.html',
  styleUrl: './products-layout.component.css'
})
export class ProductsLayoutComponent {
  //elementos para el menu
@HostBinding('class') class='flex-1 flex flex-col'
  menuItems: { to: string; title: string }[] = [
    {
      to: '/app/products',
      title: 'Productos',
    },
    {
      to: '/app/products/packages',
      title: 'Paquetes',
    },
    {
      to: '/app/products/categories',
      title: 'Categorias',
    },
  ];
}
