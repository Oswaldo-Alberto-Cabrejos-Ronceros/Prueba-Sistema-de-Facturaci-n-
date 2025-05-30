import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { PopUpCardComponent } from '../pop-up-card/pop-up-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up-options-check-return',
  imports: [PopUpCardComponent, CommonModule],
  templateUrl: './pop-up-options-check-return.component.html',
  styleUrl: './pop-up-options-check-return.component.css',
})
export class PopUpOptionsCheckReturnComponent {
  @HostBinding('class') class = 'absolute top-0 left-0';
  //necesarios para pop-up-card
  @Input() visible = false;
  @Input() trigger!: ElementRef;
  @Input() size: string = 'base';
  @Input() options: string[] = [];
  @Input() optionsSelected:number=0
  //para mandar index nuevo al padre

  @Output() changeOption = new EventEmitter<number>();
  //for option selected

  //funcion que cambio opcion seleccionada y envia index al padre
  handleOption(index: number) {
    this.optionsSelected = index;
    this.changeOption.emit(this.optionsSelected);
  }
}
