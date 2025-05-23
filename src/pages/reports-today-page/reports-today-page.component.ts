import { Component } from '@angular/core';
import { CardAmountSolesDolarsUnitaryComponent } from "../../components/card-amount-soles-dolars-unitary/card-amount-soles-dolars-unitary.component";

@Component({
  selector: 'app-reports-today-page',
  imports: [CardAmountSolesDolarsUnitaryComponent],
  templateUrl: './reports-today-page.component.html',
  styleUrl: './reports-today-page.component.css',
})
export class ReportsTodayPageComponent {
  infoToday: {
    iconName: string;
    title: string;
    emptyMessage?: string;
    data: { subtitle: string; soles: number; dolars: number }[];
  } = {
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
  };
}
