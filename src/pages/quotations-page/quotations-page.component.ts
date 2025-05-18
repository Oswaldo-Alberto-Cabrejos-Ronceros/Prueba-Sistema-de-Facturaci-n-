import { Component, ElementRef, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { CommonModule } from '@angular/common';
import { DatePickerSetComponent } from "../../components/date-picker-set/date-picker-set.component";
import { TableFilterComponent } from "../../components/table-filter/table-filter.component";
import { PopUpOptionsComponent } from "../../components/pop-up-options/pop-up-options.component";
import { ButtonIconLabelQuaternaryComponent } from "../../components/button-icon-label-quaternary/button-icon-label-quaternary.component";

@Component({
  selector: 'app-quotations-page',
  imports: [CommonModule, ButtonIconLabelTerciaryComponent, DatePickerSetComponent, TableFilterComponent, PopUpOptionsComponent, ButtonIconLabelQuaternaryComponent],
  templateUrl: './quotations-page.component.html',
  styleUrl: './quotations-page.component.css',
})
export class QuotationsPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';

  //referencia del elemento que activa opciones de exportar
  @ViewChild('triggerExport', { read: ElementRef })
  triggerExportRef!: ElementRef;
  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate') customRightTemplate!: TemplateRef<any>;
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
      key: 'quotations',
      label: 'Cotización',
      typeFilter: 'input',
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
      ordenable:false,
      disable:false
    }
    ,
    {
      key: 'date',
      label: 'Fecha',
      typeFilter: 'input',
      disable: true,
    },
        {
      key: 'expiration',
      label: 'Expiración',
      typeFilter: 'input',
      disable: true,
    }
    ,
    {
      key: 'users',
      label: 'Usuario',
      typeFilter: 'input',
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

}
