import { Component, HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-primary',
  imports: [FormsModule,CommonModule],
  templateUrl: './input-primary.component.html',
  styleUrl: './input-primary.component.css'
})
export class InputPrimaryComponent {
@Input() type:string="";
@Input() name:string="";
@Input() placeholder:string="";
@HostBinding('class') class='relative w-full max-w-lg min-w-min'
value: string = '';
}
