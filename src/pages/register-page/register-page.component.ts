import { Component,  HostBinding } from '@angular/core';
import { RegistrationCardComponent } from '../../components/registration-card/registration-card.component';
@Component({
  selector: 'app-register-page',
  imports: [RegistrationCardComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
@HostBinding('class') class = 'flex flex-col flex-1 min-h-screen items-center justify-center';
}
