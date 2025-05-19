import {
  Component,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from '../../components/button-icon-label-quaternary/button-icon-label-quaternary.component';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { PopUpOptionsComponent } from '../../components/pop-up-options/pop-up-options.component';
import { DatePickerSetComponent } from "../../components/date-picker-set/date-picker-set.component";
import { TableFilterComponent } from "../../components/table-filter/table-filter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warehouse-page',
  imports: [
    ButtonIconLabelQuaternaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    DatePickerSetComponent,
    TableFilterComponent,
    CommonModule
],
  templateUrl: './warehouse-page.component.html',
  styleUrl: './warehouse-page.component.css',
})
export class WarehousePageComponent {
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

  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar movimientos',
    }
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }

  //sobre tabla

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
      key: 'movimiento',
      label: 'Movimiento',
      typeFilter: 'input',
    },
    {
      key: 'type',
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
      key: 'users',
      label: 'Usuario',
      typeFilter: 'input',
    },

        {
      key: 'origin',
      label: 'Origen',
      typeFilter: 'select',
      options: ['Todos', 'Ajuste', 'Venta'],
    }
  ];

  //para la activacion de la tabla
  isTableEnabled = false;

  //para manejar la activacion de la tabla
  handleEnabledTable = () => {
    this.isTableEnabled = !this.isTableEnabled;
  };
}
