import { Component, HostBinding, signal } from '@angular/core';
import { MenuPrincipalLayoutComponent } from './components/menu-principal-layout/menu-principal-layout.component';
import { TrialMonthCardComponent } from '../../components/trial-month-card/trial-month-card.component';
import { MenuHeaderComponent } from '../../components/menu-header/menu-header.component';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from '../../components/tab-bar/tab-bar.component';
import { NavBarUserComponent } from '../../components/nav-bar-user/nav-bar-user.component';

@Component({
  selector: 'app-principal-layout',
  imports: [
    MenuPrincipalLayoutComponent,
    TrialMonthCardComponent,
    MenuHeaderComponent,
    CommonModule,
    TabBarComponent,
    NavBarUserComponent
  ],
  templateUrl: './principal-layout.component.html',
  styleUrl: './principal-layout.component.css',
})
export class PrincipalLayoutComponent {
  @HostBinding('class') class =
    'min-h-screen w-full flex bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50';

  //para ver o no el menu en pantallas pequeñas
  isSmallMenuOpen = signal<boolean>(false);

  //para manejo de menu en pantallas pequeñas
  handleSmallMenu() {
    this.isSmallMenuOpen.update((value) => (value = !value));
  }

  //elementos para el menu

  menuItems: { to: string; title: string }[] = [
    {
      to: '/app/registro',
      title: 'Ventas',
    },
    {
      to: '/app/restore-password',
      title: 'Compras',
    },
    {
      to: '/app/login',
      title: 'Productos',
    },
  ];
}
