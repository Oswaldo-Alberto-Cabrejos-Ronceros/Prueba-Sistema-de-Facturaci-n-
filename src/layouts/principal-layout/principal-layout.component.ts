import { Component, HostBinding } from '@angular/core';
import { MenuPrincipalLayoutComponent } from './components/menu-principal-layout/menu-principal-layout.component';
@Component({
  selector: 'app-principal-layout',
  imports: [MenuPrincipalLayoutComponent],
  templateUrl: './principal-layout.component.html',
  styleUrl: './principal-layout.component.css'
})
export class PrincipalLayoutComponent {
 @HostBinding('class') class =
    'min-h-screen w-full flex bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50';
  }
