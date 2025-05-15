import { Component, HostBinding } from '@angular/core';
import { InputPrimaryComponent } from '../input-primary/input-primary.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
@Component({
  selector: 'app-registration-card',
  imports: [InputPrimaryComponent,ButtonPrimaryComponent],
  templateUrl: './registration-card.component.html',
  styleUrl: './registration-card.component.css'
})
export class RegistrationCardComponent {
@HostBinding('class') class = 'w-full max-w-lg px-2 py-4 gap-4 flex flex-col items-center justify-center';
}
