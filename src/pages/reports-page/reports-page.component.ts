import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { DatePickerSetComponent } from '../../components/date-picker-set/date-picker-set.component';
import { TablePrimaryComponent } from '../../components/table-primary/table-primary.component';
import { SwitchPrimaryComponent } from '../../components/switch-primary/switch-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports-page',
  imports: [
    DatePickerSetComponent,
    TablePrimaryComponent,
    SwitchPrimaryComponent,
    CommonModule
  ],
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.css',
})
export class ReportsPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-1';
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

  //columnas de tabla principal sin gastos
  columns: { label: string; width?: string }[] = [
    {
      label: 'Total ventas',
    },
    {
      label: 'Total compras',
    },
    {
      label: 'Total',
    },
  ];

  columnsWithExpenses: { label: string; width?: string }[] = [
    {
      label: 'Total ventas',
    },
    {
      label: 'Total compras',
    },
    {
      label: 'Total gastos',
    },
    {
      label: 'Total',
    },
  ];
  //data sin gastos
  data: { totalVentas: number; totalCompras: number; total: number }[] = [
    {
      totalVentas: 50.0,
      totalCompras: 40.0,
      total: 35.0,
    },
  ];

  dataWithExpenses: {
    totalVentas: number;
    totalCompras: number;
    totalGastos: number;
    total: number;
  }[] = [
    {
      totalVentas: 50.0,
      totalCompras: 40.0,
      totalGastos: 90.0,
      total: 35.0,
    },
  ];

  //para el valor del switch
  withExpenses: boolean = false;

  //funcion que cambia withExpenses
  changeWithExpenses(value:boolean){
    this.withExpenses=value
  }
}
