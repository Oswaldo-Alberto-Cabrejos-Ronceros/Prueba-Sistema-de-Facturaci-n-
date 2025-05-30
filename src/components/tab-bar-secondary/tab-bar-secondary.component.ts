import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-bar-secondary',
  imports: [CommonModule],
  templateUrl: './tab-bar-secondary.component.html',
  styleUrl: './tab-bar-secondary.component.css',
})
export class TabBarSecondaryComponent {
  @HostBinding('class') class = 'w-full';
  @Input() options: { label: string; iconName: string }[] = [];
  @Input() optionSelected: number = 0;

  @Output() changeOption = new EventEmitter<number>();
  //for option selected

  //funcion que cambio opcion seleccionada y envia index al padre
  handleOption(index: number) {
    this.optionSelected = index;
    this.changeOption.emit(this.optionSelected);
  }
}
