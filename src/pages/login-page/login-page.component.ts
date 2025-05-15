import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../components/button-primary/button-primary.component';
import { InputPrimaryComponent } from '../../components/input-primary/input-primary.component';
@Component({
  selector: 'app-login-page',
  imports: [ButtonPrimaryComponent, InputPrimaryComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
