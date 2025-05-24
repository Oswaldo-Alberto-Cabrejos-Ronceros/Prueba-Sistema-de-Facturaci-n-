import { Component, HostBinding } from '@angular/core';
import { TablePrimaryComponent } from '../../components/table-primary/table-primary.component';
import { ButtonIconTerciaryComponent } from '../../components/button-icon-terciary/button-icon-terciary.component';
import { ButtonSecondaryComponent } from '../../components/button-secondary/button-secondary.component';
import { SelectSecondaryComponent } from '../../components/select-secondary/select-secondary.component';

@Component({
  selector: 'app-reports-accounting-page',
  imports: [
    TablePrimaryComponent,
    ButtonIconTerciaryComponent,
    ButtonSecondaryComponent,
    SelectSecondaryComponent,
  ],
  templateUrl: './reports-accounting-page.component.html',
  styleUrl: './reports-accounting-page.component.css',
})
export class ReportsAccountingPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //columnas de tabla de emails de destino
  columnsEmailsDestino: { label: string; width?: string }[] = [
    {
      label: 'Emails destino',
      width: 'w-[80%]',
    },
    {
      label: 'Acciones',
      width: 'w-[20%]',
    },
  ];

  emailsDestinoData: { email: string }[] = [
    {
      email: 'oswaldocabrejosr@gmail.com',
    },
    {
      email: 'oswaldocabrejos15r@gmail.com',
    },
  ];

  //opciones para tipo de regimen

  optionsRegimen: { label: string; value: number }[] = [
    {
      label: 'NRUS Régimen Unico Simplificado',
      value: 1,
    },
    {
      label: 'RER Régimen Especial',
      value: 1,
    },
  ];

  //columnas de tabla principal
  columns: { label: string; width?: string }[] = [
    {
      label: 'Mes',
    },
    {
      label: 'Resumen de totales',
    },
    {
      label: 'Resumen detallado(Facturas)',
    },
    {
      label: 'Compendio (Boletas y notas)',
    },
    {
      label: 'Compendio (Facturas y notas)',
    },
    {
      label: 'Libro electrónico de ventas (formato txt)',
    },
    {
      label: 'Libro electrónico de ventas SIRE (formato zip)',
    },
  ];
}
