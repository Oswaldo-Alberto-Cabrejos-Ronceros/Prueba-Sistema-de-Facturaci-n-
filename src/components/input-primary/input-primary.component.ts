import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-input-primary',
  imports: [],
  templateUrl: './input-primary.component.html',
  styleUrl: './input-primary.component.css'
})
export class InputPrimaryComponent {
@Input() type:string="";
@Input() name:string="";
@Input() placeholder:string="";
}
