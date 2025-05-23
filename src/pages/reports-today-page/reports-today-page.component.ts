import { Component } from '@angular/core';
import { CardAmountSolesDolarsSetComponent } from "../../components/card-amount-soles-dolars-set/card-amount-soles-dolars-set.component";

@Component({
  selector: 'app-reports-today-page',
  imports: [CardAmountSolesDolarsSetComponent],
  templateUrl: './reports-today-page.component.html',
  styleUrl: './reports-today-page.component.css',
})
export class ReportsTodayPageComponent {
  infoToday: {
    iconName: string;
    title: string;
    emptyMessage?: string;
    data: { subtitle?: string; soles: number; dolars: number }[];
  } [] = [{
    iconName: 'shopping_basket',
    title: 'Montos totales empleados en compras',
    data: [
      {
        subtitle: 'compras',
        soles: 20.0,
        dolars: 50.0,
      },
      {
        subtitle: 'percepciones',
        soles: 40.0,
        dolars: 30.0,
      },
      {
        subtitle: 'fletes',
        soles: 10.0,
        dolars: 80.0,
      },
    ],
  },{
    iconName: 'inventory_2',
    title: 'Montos totales en movimientos de caja chica',
    data: [
      {
        subtitle: 'entradas',
        soles: 20.0,
        dolars: 50.0,
      },
      {
        subtitle: 'salidas',
        soles: 40.0,
        dolars: 30.0,
      }
    ],
  },
{
    iconName: 'monitoring',
    title: 'Promedios de los totales de ventas',
    data: [
      {
        soles: 20.0,
        dolars: 50.0,
      }
    ],
  }];
}
