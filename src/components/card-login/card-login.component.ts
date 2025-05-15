import { Component,  HostBinding } from '@angular/core';
import { ButtonPrimaryComponent } from '../../components/button-primary/button-primary.component';
import { InputPrimaryComponent } from '../../components/input-primary/input-primary.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card-login',
  imports: [ButtonPrimaryComponent, InputPrimaryComponent,RouterLink],
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.css'
})
export class CardLoginComponent {
 @HostBinding('class') class = 'w-full max-w-5xl px-2 py-4 gap-4 flex flex-col items-center justify-center';
}
