import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAuthLayoutComponent } from './components/header-auth-layout/header-auth-layout.component';
@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet,HeaderAuthLayoutComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
