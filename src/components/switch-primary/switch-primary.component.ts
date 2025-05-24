import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-primary',
  imports: [],
  templateUrl: './switch-primary.component.html',
  styleUrl: './switch-primary.component.css'
})
export class SwitchPrimaryComponent {
  @Input() value:boolean=false;
  @Output() state=new EventEmitter<boolean>()

  //para emtir valor
  switchEmit(event:Event){
    const input= event.target as HTMLInputElement;
    this.value=input.checked
    this.state.emit(this.value)
  }
}
