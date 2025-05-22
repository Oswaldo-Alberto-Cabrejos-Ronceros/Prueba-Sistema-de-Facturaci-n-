import { Component, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-secondary',
  imports: [FormsModule],
  templateUrl: './input-secondary.component.html',
  styleUrl: './input-secondary.component.css'
})
export class InputSecondaryComponent {
@Input() type:string="";
@Input() name:string="";
@Input() placeholder:string="";
@HostBinding('class') class='w-full max-w-lg min-w-min'
value: string = '';
}
