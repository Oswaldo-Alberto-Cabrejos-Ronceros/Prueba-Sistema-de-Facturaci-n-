import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationItemCardPrimaryComponent } from "../presentation-item-card-primary/presentation-item-card-primary.component";
import { ButtonOutlinePrimaryComponent } from "../button-outline-primary/button-outline-primary.component";

@Component({
  selector: 'app-presentation-card-primary',
  imports: [CommonModule, PresentationItemCardPrimaryComponent, ButtonOutlinePrimaryComponent],
  templateUrl: './presentation-card-primary.component.html',
  styleUrl: './presentation-card-primary.component.css'
})
export class PresentationCardPrimaryComponent {
@HostBinding('class') class='w-full min-w-lg'
@Input() title:string=''
@Input() items:{title:string,content:string,iconName:string}[]=[]
@Input() labelButton:string=''
@Output() agregarCategoria=new EventEmitter<void>()

emitAgregarCategoria(){
  this.agregarCategoria.emit()
}

}
