import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from '../../components/button-icon-label-quaternary/button-icon-label-quaternary.component';
import { TableFilterSecondaryComponent } from '../../components/table-filter-secondary/table-filter-secondary.component';
import { SwitchPrimaryComponent } from '../../components/switch-primary/switch-primary.component';

@Component({
  selector: 'app-configurations-serials-page',
  imports: [
    ButtonIconLabelQuaternaryComponent,
    TableFilterSecondaryComponent,
    SwitchPrimaryComponent,
  ],
  templateUrl: './configurations-serials-page.component.html',
  styleUrl: './configurations-serials-page.component.css',
})
export class ConfigurationsSerialsPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;
  taxe: any;
  //inyectamos servicio template-injector
  constructor(
    private navBarUserTemplateInjector: NavBarUserTemplateInjectorService
  ) {}
  ngAfterViewInit(): void {
    this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
  }

  //columnas para la tabla
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
      key: 'serial',
      label: 'Serie',
      typeFilter: 'input',
      width: 'w-[25%]',
    },
    {
      key: 'correlative',
      label: 'Correlativo',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[13%]',
    },
    {
      key: 'documentType',
      label: 'Tipo documento',
      typeFilter: 'select',
      options: [
        { label: 'Factura', value: 1 },
        { label: 'Boleta venta', value: 2 },
        { label: 'Nota de crédito', value: 3 },
      ],
      width: 'w-[25%]',
    },
    {
      key: 'description',
      label: 'Descripción',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[25%]',
    },
    {
      key: 'deactive',
      label: 'Desactivar',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[12%]',
    },
  ];

  serials: {
    name: string;
    correlative: string;
    typeDocument: string;
    description: string;
    active: boolean;
  }[] = [
    {
      name: 'BE01',
      correlative: '00001',
      typeDocument: 'Boleta de venta',
      description: 'Serie Boletas',
      active: true,
    },
    {
      name: 'FE01',
      correlative: '00001',
      typeDocument: 'Factura',
      description: 'Serie Facturas',
      active: false,
    },
  ];
}
