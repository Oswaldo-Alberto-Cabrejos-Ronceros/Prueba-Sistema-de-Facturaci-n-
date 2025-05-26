import {
  Component,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { PopUpOptionsComponent } from '../../components/pop-up-options/pop-up-options.component';
import { DatePickerSetComponent } from '../../components/date-picker-set/date-picker-set.component';
import { TableFilterSecondaryComponent } from '../../components/table-filter-secondary/table-filter-secondary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports-kardex-page',
  imports: [
    ButtonIconLabelTerciaryComponent,
    CommonModule,
    PopUpOptionsComponent,
    DatePickerSetComponent,
    TableFilterSecondaryComponent,
  ],
  templateUrl: './reports-kardex-page.component.html',
  styleUrl: './reports-kardex-page.component.css',
})
export class ReportsKardexPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //referencia del elemento que activa opciones de exportar
  @ViewChild('triggerExport', { read: ElementRef })
  triggerExportRef!: ElementRef;
  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;

  //inyectamos servicio template-injector
  constructor(
    private navBarUserTemplateInjector: NavBarUserTemplateInjectorService
  ) {}
  ngAfterViewInit(): void {
    this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
  }
  columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: {label:string,value:string|number}[];
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
      width: 'w-[35%]',
    },
    {
      key: 'inputs',
      label: 'Entradas',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[10%]',
    },
    {
      key: 'outputs',
      label: 'Salidas',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[10%]',
    },
    {
      key: 'total',
      label: 'Total',
      typeFilter: 'input',
      disable: true,
      width: 'w-[15%]',
    },
    {
      key: 'kardex',
      label: 'Kardex',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[10%]',
    },
  ];

  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar kardex',
    },
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }
}
