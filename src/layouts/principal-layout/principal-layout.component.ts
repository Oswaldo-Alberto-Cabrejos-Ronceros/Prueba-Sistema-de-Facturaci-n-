import { Component, HostBinding, signal } from '@angular/core';
import { MenuPrincipalLayoutComponent } from './components/menu-principal-layout/menu-principal-layout.component';
import { TrialMonthCardComponent } from '../../components/trial-month-card/trial-month-card.component';
import { MenuHeaderComponent } from '../../components/menu-header/menu-header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-principal-layout',
  imports: [
    MenuPrincipalLayoutComponent,
    TrialMonthCardComponent,
    MenuHeaderComponent,
    CommonModule,
  ],
  templateUrl: './principal-layout.component.html',
  styleUrl: './principal-layout.component.css',
})
export class PrincipalLayoutComponent {
  @HostBinding('class') class =
    'min-h-screen w-full flex bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50';
  isSmallMenuOpen = signal<boolean>(false);

  handleSmallMenu() {
    this.isSmallMenuOpen.update((value) => (value = !value));
  }
}
