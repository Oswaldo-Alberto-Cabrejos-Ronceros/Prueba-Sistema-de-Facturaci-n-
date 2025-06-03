import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-terciary',
  imports: [CommonModule],
  templateUrl: './input-terciary.component.html',
  styleUrl: './input-terciary.component.css'
})
export class InputTerciaryComponent {
@HostBinding('class') class='w-full max-w-3xl min-w-min flex items-center justify-center'
//nombre
@Input() name:string=''
//placeholder
@Input() placeholder:string=''
@Input() size:string='sm'
}
