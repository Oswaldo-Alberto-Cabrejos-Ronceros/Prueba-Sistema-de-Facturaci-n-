import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-search',
  imports: [IconComponent,CommonModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearchComponent {
@HostBinding('class') class='w-full max-w-3xl min-w-min flex items-center justify-center'
//nombre
@Input() name:string=''
//placeholder
@Input() placeholder:string='Buscar'
@Input() size:string='sm'
}
