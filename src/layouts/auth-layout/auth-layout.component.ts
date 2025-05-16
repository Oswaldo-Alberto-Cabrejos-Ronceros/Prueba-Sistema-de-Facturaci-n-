import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAuthLayoutComponent } from './components/header-auth-layout/header-auth-layout.component';
@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet,HeaderAuthLayoutComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
  @HostBinding('class') class =
    'min-h-screen w-full flex flex-col bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50';
}
