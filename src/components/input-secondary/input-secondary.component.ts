import { Component, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-secondary',
  imports: [FormsModule,CommonModule],
  templateUrl: './input-secondary.component.html',
  styleUrl: './input-secondary.component.css'
})
export class InputSecondaryComponent {
@Input() type:string="";
@Input() name:string="";
@Input() placeholder:string="";
@Input() size:string="base";
@HostBinding('class') class='w-full max-w-lg min-w-min'
value: string = '';
}
