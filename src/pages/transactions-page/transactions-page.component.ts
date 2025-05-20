import { Component, ElementRef, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from "../../components/button-icon-label-terciary/button-icon-label-terciary.component";
import { PopUpOptionsComponent } from "../../components/pop-up-options/pop-up-options.component";
import { CommonModule } from '@angular/common';
import { ButtonIconLabelQuaternaryComponent } from "../../components/button-icon-label-quaternary/button-icon-label-quaternary.component";
import { DatePickerSetComponent } from "../../components/date-picker-set/date-picker-set.component";
import { TableFilterComponent } from "../../components/table-filter/table-filter.component";

@Component({
  selector: 'app-transactions-page',
  imports: [CommonModule, ButtonIconLabelTerciaryComponent, PopUpOptionsComponent, ButtonIconLabelQuaternaryComponent, DatePickerSetComponent, TableFilterComponent],
  templateUrl: './transactions-page.component.html',
  styleUrl: './transactions-page.component.css'
})
export class TransactionsPageComponent {
 @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';

  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;

  //referencia del elemento que activa opciones de exportar
  @ViewChild('triggerExport', { read: ElementRef })
  triggerExportRef!: ElementRef;
  //referencia del elemtno qeu activa carta opciones
  @ViewChild('triggerOptions', { read: ElementRef })
  triggerOptionsRef!: ElementRef;

  //inyectamos servicio template-injector
  constructor(
    private navBarUserTemplateInjector: NavBarUserTemplateInjectorService
  ) {}
  ngAfterViewInit(): void {
    this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
  }


  
  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar documentos',
    },
    {
      title: 'Archivos documentos PDF',
    },
    {
      title: 'Archivos documentos XML',
    },
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }

  //sobre opciones

  optionsOptions: { title: string }[] = [
    {
      title: 'Resúmenes',
    },
    {
      title: 'Bajas',
    },
    {
      title: 'Anticipo',
    },
  ];

  //para mostrar carta de opciones
  showPopUpOptions = false;
  handlePopUpOptions() {
    this.showPopUpOptions = !this.showPopUpOptions;
  }

  //sobre tabla
  
  columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: string[];
    ordenable?: boolean;
  }[] = [

        {
      key: 'date',
      label: 'Fecha',
      typeFilter: 'input',
      disable: true,
    },
    {
      key: 'description',
      label: 'Descripción',
      typeFilter: 'input',
    },
    {
      key: 'users',
      label: 'Usuarios',
      typeFilter: 'input',
    },
    {
      key: 'type',
      label: 'Total',
      typeFilter: 'select',
      options: ['Todos', 'Pago de venta', 'Pago de compra'],
    },
    {
      key: 'account',
      label: 'Cuenta',
      typeFilter: 'select',
      options: ['Todos', 'Efectivo (PEN)'],
    },
    {
      key: 'amount',
      label: 'Monto',
      typeFilter: 'input',
    }
  ];

  //para la activacion de la tabla
  isTableEnabled = false;

  //para manejar la activacion de la tabla
  handleEnabledTable = () => {
    this.isTableEnabled = !this.isTableEnabled;
  };


}
