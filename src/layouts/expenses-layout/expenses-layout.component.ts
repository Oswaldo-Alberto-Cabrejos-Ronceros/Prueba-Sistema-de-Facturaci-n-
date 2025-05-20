import { Component, HostBinding } from '@angular/core';
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";
import { TabBarComponent } from "../../components/tab-bar/tab-bar.component";
import { NavBarDropDownComponent } from "../../components/nav-bar-drop-down/nav-bar-drop-down.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expenses-layout',
  imports: [RouterOutlet,NavBarUserComponent, TabBarComponent, NavBarDropDownComponent],
  templateUrl: './expenses-layout.component.html',
  styleUrl: './expenses-layout.component.css'
})
export class ExpensesLayoutComponent {
@HostBinding('class') class='flex-1 flex flex-col'
  menuItems: { to: string; title: string }[] = [
    {
      to: '/app/expenses',
      title: 'Gastos',
    }
  ];
}
