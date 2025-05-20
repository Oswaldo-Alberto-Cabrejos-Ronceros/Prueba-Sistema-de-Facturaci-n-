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
import { DatePickerSetComponent } from '../../components/date-picker-set/date-picker-set.component';
import { TableFilterComponent } from '../../components/table-filter/table-filter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchases-page',
  imports: [
    ButtonIconLabelQuaternaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    DatePickerSetComponent,
    TableFilterComponent,
    CommonModule,
  ],
  templateUrl: './purchases-page.component.html',
  styleUrl: './purchases-page.component.css',
})
export class PurchasesPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;
  //referencia del elemento que activa opciones de exportar
  @ViewChild('triggerExport', { read: ElementRef })
  triggerExportRef!: ElementRef;
  //referencia del elemento que activa carta de notificaciones
  @ViewChild('triggerNotifications', { read: ElementRef })
  triggerNotificationsRef!: ElementRef;

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
      title: 'Exportar compras',
    },
    {
      title: 'Exportar pagos detallados',
    },
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }

  //para mostrar carta de notificaciones
  showPopUpNotifications = false;
  handlePopUpNotifications() {
    this.showPopUpNotifications = !this.showPopUpNotifications;
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
      key: 'purchases',
      label: 'Compra',
      typeFilter: 'input',
    },
    {
      key: 'document',
      label: 'Documento',
      typeFilter: 'input',
    },
    {
      key: 'provider',
      label: 'Provedor',
      typeFilter: 'input',
    },
    {
      key: 'state',
      label: 'Total',
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
  ];

  //para la activacion de la tabla
  isTableEnabled = false;

  //para manejar la activacion de la tabla
  handleEnabledTable = () => {
    this.isTableEnabled = !this.isTableEnabled;
  };
}
