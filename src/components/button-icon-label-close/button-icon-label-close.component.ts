import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
@Component({
  selector: 'app-button-icon-label-close',
  imports: [],
  templateUrl: './button-icon-label-close.component.html',
  styleUrl: './button-icon-label-close.component.css'
})
export class ButtonIconLabelCloseComponent {
@Input() name:string=''
@Input() iconName : string=''
@HostBinding('class') class='h-full max-h-24 w-full max-w-lg min-w-min flex items-center justify-center'
@Output() close=new EventEmitter<void>()
onClose=()=>{
  this.close.emit();
  console.log("cerrar")
}
}
