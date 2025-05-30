import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-input-edit',
  imports: [IconComponent],
  templateUrl: './input-edit.component.html',
  styleUrl: './input-edit.component.css'
})
export class InputEditComponent {
@HostBinding('class') class='w-full max-w-3xl min-w-min flex items-center justify-center'
//nombre
@Input() name:string=''
//placeholder
@Input() placeholder:string='Buscar'
//value
@Input() value:string=''

isDisabled:boolean=true

handleActive(){
  this.isDisabled=!this.isDisabled
}
}
