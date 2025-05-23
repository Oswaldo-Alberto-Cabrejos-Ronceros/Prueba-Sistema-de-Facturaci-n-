import {
  Component,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TableFilterSecondaryComponent } from '../../components/table-filter-secondary/table-filter-secondary.component';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { PopUpOptionsComponent } from '../../components/pop-up-options/pop-up-options.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports-products-page',
  imports: [
    CommonModule,
    TableFilterSecondaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
  ],
  templateUrl: './reports-products-page.component.html',
  styleUrl: './reports-products-page.component.css',
})
export class ReportsProductsPageComponent {
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
      ordenable: false,
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

  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar ventas por producto',
    },
    {
      title: 'Enviar reporte detallado por email',
    },
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }
}
