import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-primary',
  imports: [FormsModule],
  templateUrl: './checkbox-primary.component.html',
  styleUrl: './checkbox-primary.component.css'
})
export class CheckboxPrimaryComponent {
  //estilos del host
  @HostBinding('class') class='w-full max-w-lg min-w-min'
  @Input() value:boolean=false;
  //label
  @Input() label:string=''
  @Output() state=new EventEmitter<boolean>()
    //para emtir valor
  checkEmit(value:boolean){
    this.state.emit(value)
    console.log(value)
  }
}
