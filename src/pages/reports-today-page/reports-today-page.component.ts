import { Component, HostBinding } from '@angular/core';
import { CardAmountSolesDolarsSetComponent } from '../../components/card-amount-soles-dolars-set/card-amount-soles-dolars-set.component';
import { CardExportComponent } from "../../components/card-export/card-export.component";

@Component({
  selector: 'app-reports-today-page',
  imports: [CardAmountSolesDolarsSetComponent, CardExportComponent],
  templateUrl: './reports-today-page.component.html',
  styleUrl: './reports-today-page.component.css',
})
export class ReportsTodayPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //datos para la carde de informacion de hoy
  infoToday: {
    iconName: string;
    title: string;
    emptyMessage?: string;
    data: { subtitle?: string; soles: number; dolars: number }[];
  }[] = [
    {
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
    },
    {
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
        },
      ],
    },
    {
      iconName: 'monitoring',
      title: 'Promedios de los totales de ventas',
      data: [
        {
          soles: 20.0,
          dolars: 50.0,
        },
      ],
    },
  ];

  //para info de ventas por empleados
  infoSaleEmployee: {
    iconName: string;
    title: string;
    emptyMessage?: string;
    data: { subtitle?: string; soles: number; dolars: number }[];
  }[] = [
    {
      iconName: 'groups',
      title: 'Ventas por vendedor',
      emptyMessage:'Aún no han habido ventas el día de hoy',
      data: [],
    },
  ];
  //conseguimos el dia de actual
  //opciones para la fecha
  optionsDate: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  today = new Date().toLocaleDateString('es-PE', this.optionsDate);

  //para productos mas vendidos

}
