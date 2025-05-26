import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { TableFilterSecondaryComponent } from "../../components/table-filter-secondary/table-filter-secondary.component";
import { SwitchPrimaryComponent } from "../../components/switch-primary/switch-primary.component";
import { TabBarComponent } from "../../components/tab-bar/tab-bar.component";

@Component({
  selector: 'app-configurations-currencies-page',
  imports: [TableFilterSecondaryComponent, SwitchPrimaryComponent, TabBarComponent],
  templateUrl: './configurations-currencies-page.component.html',
  styleUrl: './configurations-currencies-page.component.css'
})
export class ConfigurationsCurrenciesPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;
taxe: any;
unit: any;
  //inyectamos servicio template-injector
  constructor(
    private navBarUserTemplateInjector: NavBarUserTemplateInjectorService
  ) {}
  ngAfterViewInit(): void {
    this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
  }


  //columnas para monedas
    columnsCurrencies: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: string[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'currencie',
      label: 'Moneda',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[60%]',
    },
    {
      key: 'symbol',
      label: 'Simbolo',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[20%]',
    },
        {
      key: 'default',
      label: 'Por defecto',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[20%]',
    }
  ];

  dataCurrencies:{name:string,symbol:string,default:boolean}[]=[
    {
      name: 'Soles (PEN)',
      symbol: 'S/',
      default: true
    },
        {
      name: 'Dólares americanos (USD)',
      symbol: '$',
      default: false
    }
  ]


  //columnas para tipo de cambio
    columnsExchangeRate: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: string[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'currencie',
      label: 'Moneda',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[60%]',
    },
    {
      key: 'amount',
      label: 'Monto',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[15%]',
    },
        {
      key: 'create',
      label: 'Creado',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[25%]',
    }
  ];

  dataExhangeRate:{currencie:string,amount:number, createDate:string}[]=[
    {
      currencie: 'Dólares americanos (USD)',
      amount: 3.753,
      createDate: '14 may. 2025'
    }
  ]

}
