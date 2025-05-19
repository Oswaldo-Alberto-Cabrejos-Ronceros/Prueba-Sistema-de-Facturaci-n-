import { Component, ElementRef, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { TableFilterComponent } from "../../components/table-filter/table-filter.component";
import { DatePickerSetComponent } from "../../components/date-picker-set/date-picker-set.component";
import { PopUpOptionsComponent } from '../../components/pop-up-options/pop-up-options.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing-page',
  imports: [CommonModule,ButtonIconLabelTerciaryComponent,PopUpOptionsComponent, TableFilterComponent, DatePickerSetComponent],
  templateUrl: './billing-page.component.html',
  styleUrl: './billing-page.component.css',
})
export class BillingPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';

  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate') customRightTemplate!: TemplateRef<any>;

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

  //columnas de tabla


  columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: string[];
    ordenable?: boolean;
  }[] = [
    {
      key: 'billing',
      label: 'Facturación',
      typeFilter: 'input',
    },
    {
      key: 'state',
      label: 'Tipo',
      typeFilter: 'select',
      options: ['Todos', 'Pagado', 'Deuda'],
    },
    {
      key: 'date',
      label: 'Fecha',
      typeFilter: 'input',
      disable: true,
    },
    {
      key: 'date',
      label: 'Fecha',
      typeFilter: 'input',
      disable:true,
      ordenable: true,
    },
    {
      key: 'clients',
      label: 'Cliente',
      typeFilter: 'input',
    },
        {
      key: 'total',
      label: 'Total',
      typeFilter: 'input',
    },
        {
      key: 'state',
      label: 'Todos',
      typeFilter: 'select',
      options: ['Todos', 'Pagado', 'Deuda'],
    }
  ];

  //para la activacion de la tabla
 isTableEnabled  = false;

  //para manejar la activacion de la tabla
  handleEnabledTable = () => {
    this.isTableEnabled = !this.isTableEnabled;
  };



  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar documentos',
    },
    {
      title: 'Archivos documentos PDF',
    },    {
      title: 'Archivos documentos XML',
    }
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
    },    {
      title: 'Anticipo',
    }
  ];

  //para mostrar carta de opciones
  showPopUpOptions = false;
  handlePopUpOptions() {
    this.showPopUpOptions = !this.showPopUpOptions;
  }

}
