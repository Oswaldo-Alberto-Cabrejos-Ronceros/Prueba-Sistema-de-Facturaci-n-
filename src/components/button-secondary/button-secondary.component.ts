import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  imports: [],
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.css'
})
export class ButtonSecondaryComponent {
@Input() label:string=''
}
