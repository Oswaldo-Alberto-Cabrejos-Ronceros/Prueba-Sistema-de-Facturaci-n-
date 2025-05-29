import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-square',
  imports: [CommonModule],
  templateUrl: './button-square.component.html',
  styleUrl: './button-square.component.css'
})
export class ButtonSquareComponent {
@Input() iconName:string=''
@Input() ariaLabel:string=''
@Input() active:boolean=false
//funcion para varia active
handleActive(){
  this.active=!this.active
}
}
