import { Component, HostBinding } from '@angular/core';
import { TablePrimaryComponent } from "../../components/table-primary/table-primary.component";
import { ButtonIconTerciaryComponent } from "../../components/button-icon-terciary/button-icon-terciary.component";

@Component({
  selector: 'app-reports-accounting-page',
  imports: [TablePrimaryComponent, ButtonIconTerciaryComponent],
  templateUrl: './reports-accounting-page.component.html',
  styleUrl: './reports-accounting-page.component.css'
})
export class ReportsAccountingPageComponent {
@HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //columnas de tabla de emails de destino
  columnsEmailsDestino:string[]=[
    "Emails destino",
    "Acciones"
  ]

  emailsDestinoData:{email:string}[]=[
    {
      email:'oswaldocabrejosr@gmail.com'
    },
        {
      email:'oswaldocabrejos15r@gmail.com'
    }
  ]

  //columnas de tabla principal
  columns:string[]=[
    "Mes",
    "Resumen de totales",
    "Resumen detallado(Facturas)",
    "Compendio (Boletas y notas)",
    "Compendio (Facturas y notas)",
    "Libro electrónico de ventas (formato txt)",
    "Libro electrónico de ventas SIRE (formato zip)"
  ]
}
