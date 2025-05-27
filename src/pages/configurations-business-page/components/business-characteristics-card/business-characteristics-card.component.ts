import { Component } from '@angular/core';
import { CardItemPresentationComponent } from '../../../../components/card-item-presentation/card-item-presentation.component';
import { SwitchPrimaryComponent } from '../../../../components/switch-primary/switch-primary.component';
import { CommonModule } from '@angular/common';
import { InputSecondaryComponent } from "../../../../components/input-secondary/input-secondary.component";

@Component({
  selector: 'app-business-characteristics-card',
  imports: [CommonModule, CardItemPresentationComponent, SwitchPrimaryComponent, InputSecondaryComponent],
  templateUrl: './business-characteristics-card.component.html',
  styleUrl: './business-characteristics-card.component.css',
})
export class BusinessCharacteristicsCardComponent {
  //para cartas con switchs
  cardsWithSwitch: {
    iconName: string;
    title: string;
    content: string;
    active: boolean;
  }[] = [
    {
      iconName: 'inventory_2',
      title: 'Stock en modo estricto.',
      content:
        'No permite hacer ventas si el stock de los productos está agotado.',
      active: false,
    },
    {
      iconName: 'credit_card',
      title: 'Pagos',
      content: `Agregar forma de pago 'crédito', en Factura/Boleta.`,
      active: true,
    },
    {
      iconName: 'local_atm',
      title: 'Agregar BOLETA DE VENTA por defecto en ventas.',
      content: `En nueva venta por defecto estará seleccionado para crearse una BOLETA DE VENTA.`,
      active: false,
    },
  ];
}
