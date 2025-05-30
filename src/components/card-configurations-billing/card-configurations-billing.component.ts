import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { CardSavePrimaryComponent } from "../card-save-primary/card-save-primary.component";
import { CheckboxPrimaryComponent } from "../checkbox-primary/checkbox-primary.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-configurations-billing',
  imports: [CardSavePrimaryComponent, CheckboxPrimaryComponent,CommonModule],
  templateUrl: './card-configurations-billing.component.html',
  styleUrl: './card-configurations-billing.component.css'
})
export class CardConfigurationsBillingComponent {
//para emitir cerrar
@Output() close=new EventEmitter()

onClose(){
  this.close.emit()
}


  //opciones barra de busqueda
  optionsSearchBar: { label: string; value: boolean }[] = [
    {
      label: 'Precio unitario',
      value: false,
    },
    {
      label: 'Placa vehicular',
      value: false,
    },
  ];

  //opciones visualizaciones complementarias

  optionsComplementaryVisualizations: { label: string; value: boolean }[] = [
    {
      label: 'Valor unitario',
      value: false,
    },
    {
      label: 'Orden de compra',
      value: false,
    },
    {
      label: 'Redondeo',
      value: false,
    },
  ];

  //opciones para opciones de facturacion
  optionsBilling: { label: string; value: boolean }[] = [
    {
      label: 'Anticipos',
      value: false,
    },
    {
      label: 'Detracción',
      value: false,
    },
    {
      label: 'Percepción',
      value: false,
    },
    {
      label: 'Retención',
      value: false,
    },
    {
      label: 'Asociar guía',
      value: false,
    },
    {
      label: 'Exportación',
      value: false,
    },
  ];

  //opciones de pago

  optionsPay: { label: string; value: boolean }[] = [
    {
      label: 'Deuda por defecto',
      value: false,
    },
  ];

}
