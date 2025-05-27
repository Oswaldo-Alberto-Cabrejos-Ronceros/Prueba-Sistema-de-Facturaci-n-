import { Component } from '@angular/core';
import { TableFilterSecondaryComponent } from "../../../../components/table-filter-secondary/table-filter-secondary.component";
import { ButtonSecondaryComponent } from "../../../../components/button-secondary/button-secondary.component";

@Component({
  selector: 'app-business-additional-product-fields-card',
  imports: [TableFilterSecondaryComponent, ButtonSecondaryComponent],
  templateUrl: './business-additional-product-fields-card.component.html',
  styleUrl: './business-additional-product-fields-card.component.css'
})
export class BusinessAdditionalProductFieldsCardComponent {
 columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: { label: string; value: string | number }[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'name',
      label: 'Nombre',
      typeFilter: 'input',
      disable: true,
      ordenable: false
    },
    {
      key: 'showColumn',
      label: 'Mostrar como columna',
      typeFilter: 'input',
      disable: true,
      ordenable: false
    },
    {
      key: 'print',
      label: 'Imprimir',
      typeFilter: 'input',
      disable: true,
      ordenable: false
    },
        {
      key: 'active',
      label: 'Está activo',
      typeFilter: 'input',
      disable: true,
      ordenable: false
    },
  ];
}
