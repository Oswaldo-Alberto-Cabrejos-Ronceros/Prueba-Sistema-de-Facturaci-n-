import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from '../../components/button-icon-label-quaternary/button-icon-label-quaternary.component';
import { TableFilterSecondaryComponent } from '../../components/table-filter-secondary/table-filter-secondary.component';
import { ButtonIconTerciaryComponent } from '../../components/button-icon-terciary/button-icon-terciary.component';

@Component({
  selector: 'app-configurations-payment-methods-page',
  imports: [
    ButtonIconLabelQuaternaryComponent,
    TableFilterSecondaryComponent,
    ButtonIconTerciaryComponent,
  ],
  templateUrl: './configurations-payment-methods-page.component.html',
  styleUrl: './configurations-payment-methods-page.component.css',
})
export class ConfigurationsPaymentMethodsPageComponent {
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
    options?: string[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'orderAction',
      label: 'Ordenar',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[12%]',
    },
    {
      key: 'order',
      label: 'Orden',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[10%]',
    },
    {
      key: 'name',
      label: 'Nombre',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[65%]',
    },
    {
      key: 'delete',
      label: 'Eliminar',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[13%]',
    },
  ];

  paymentMethods: { order: number; name: string }[] = [
    {
      order: 1,
      name: 'Efectivo',
    },
  ];
}
