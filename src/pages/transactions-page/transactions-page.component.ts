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
import { CommonModule } from '@angular/common';
import { ButtonIconLabelQuaternaryComponent } from '../../components/button-icon-label-quaternary/button-icon-label-quaternary.component';
import { DatePickerSetComponent } from '../../components/date-picker-set/date-picker-set.component';
import { TableFilterComponent } from '../../components/table-filter/table-filter.component';
import { SharedModalComponent } from '../../components/shared-modal/shared-modal.component';
import { CardSaveSecondaryComponent } from '../../components/card-save-secondary/card-save-secondary.component';
import { InputSecondaryComponent } from '../../components/input-secondary/input-secondary.component';
import { SelectSecondaryComponent } from '../../components/select-secondary/select-secondary.component';
import { TextAreaSecondaryComponent } from '../../components/text-area-secondary/text-area-secondary.component';

@Component({
  selector: 'app-transactions-page',
  imports: [
    CommonModule,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    ButtonIconLabelQuaternaryComponent,
    DatePickerSetComponent,
    TableFilterComponent,
    SharedModalComponent,
    CardSaveSecondaryComponent,
    InputSecondaryComponent,
    SelectSecondaryComponent,
    TextAreaSecondaryComponent,
  ],
  templateUrl: './transactions-page.component.html',
  styleUrl: './transactions-page.component.css',
})
export class TransactionsPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';

  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;

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

  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar documentos',
    },
    {
      title: 'Archivos documentos PDF',
    },
    {
      title: 'Archivos documentos XML',
    },
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
    },
    {
      title: 'Anticipo',
    },
  ];

  //para mostrar carta de opciones
  showPopUpOptions = false;
  handlePopUpOptions() {
    this.showPopUpOptions = !this.showPopUpOptions;
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
      key: 'date',
      label: 'Fecha',
      typeFilter: 'input',
      disable: true,
    },
    {
      key: 'description',
      label: 'Descripción',
      typeFilter: 'input',
    },
    {
      key: 'users',
      label: 'Usuarios',
      typeFilter: 'input',
    },
    {
      key: 'type',
      label: 'Total',
      typeFilter: 'select',
      options: ['Todos', 'Pago de venta', 'Pago de compra'],
    },
    {
      key: 'account',
      label: 'Cuenta',
      typeFilter: 'select',
      options: ['Todos', 'Efectivo (PEN)'],
    },
    {
      key: 'amount',
      label: 'Monto',
      typeFilter: 'input',
    },
  ];

  //para la activacion de la tabla
  isTableEnabled = false;

  //para manejar la activacion de la tabla
  handleEnabledTable = () => {
    this.isTableEnabled = !this.isTableEnabled;
  };
  //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };
  //para opciones de tipo de documento

  optionsAccount: { label: string; value: string | number }[] = [
    {
      label: 'Efectivo Pen',
      value: 1,
    },
  ];
  //opciones para tipo
  optionsType: { label: string; value: string | number }[] = [
    {
      label: 'Déposito',
      value: 1,
    },
    {
      label: 'Rétiro',
      value: 2,
    },
  ];

  //para modal transferencia
  showModalTransfer: boolean = false;
  openModalTransfer = () => {
    this.showModalTransfer = true;
  };
  closeModalTransfer = () => {
    this.showModalTransfer = false;
  };

  //opciones para origen
  optionsOrigin: { label: string; value: string | number }[] = [
    {
      label: 'Efectivo (PEN)',
      value: 1,
    },
  ];


    //opciones para destino
  optionsDestination: { label: string; value: string | number }[] = [
    {
      label: 'Destino (PEN)',
      value: 1,
    }
  ];

}
