import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';
import { CardAmountSolesDolarsUnitaryComponent } from '../card-amount-soles-dolars-unitary/card-amount-soles-dolars-unitary.component';
import { ButtonIconLabelTerciaryComponent } from '../button-icon-label-terciary/button-icon-label-terciary.component';
import { PopUpOptionsComponent } from '../pop-up-options/pop-up-options.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-export',
  imports: [
    CardAmountSolesDolarsUnitaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    CommonModule,
  ],
  templateUrl: './card-export.component.html',
  styleUrl: './card-export.component.css',
})
export class CardExportComponent {
  @HostBinding('class') class = 'w-full';
  //referencia del elemento que activa opciones de exportar
  @ViewChild('triggerExport', { read: ElementRef })
  triggerExportRef!: ElementRef;
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() optionAlternate: string = '';
  @Input() emptyMessage: string = '';
  @Input() data: { subtitle?: string; soles: number; dolars: number }[] = [];

  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Descargar xlsx',
    },
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }
}
