import { Component } from '@angular/core';
import { TableFilterSecondaryComponent } from "../../components/table-filter-secondary/table-filter-secondary.component";

@Component({
  selector: 'app-reports-products-page',
  imports: [TableFilterSecondaryComponent],
  templateUrl: './reports-products-page.component.html',
  styleUrl: './reports-products-page.component.css',
})
export class ReportsProductsPageComponent {
  columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: string[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'code',
      label: 'Código',
      typeFilter: 'input',
      width: 'w-[20%]',
    },
    {
      key: 'product',
      label: 'Producto',
      typeFilter: 'input',
      width: 'w-[40%]',
    },
    {
      key: 'last',
      label: 'Último Precio de venta',
      typeFilter: 'input',
      disable: true,
      ordenable:false,
      width: 'w-[25%]',
    },
    {
      key: 'total',
      label: 'Total',
      typeFilter: 'input',
      disable: true,
      width: 'w-[15%]',
    },
  ];
}
