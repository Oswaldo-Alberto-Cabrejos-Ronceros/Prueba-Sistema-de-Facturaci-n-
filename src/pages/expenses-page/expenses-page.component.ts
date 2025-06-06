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
import { CommonModule } from '@angular/common';
import { DatePickerSetComponent } from '../../components/date-picker-set/date-picker-set.component';
import { TableFilterComponent } from '../../components/table-filter/table-filter.component';
import { SharedModalComponent } from "../../components/shared-modal/shared-modal.component";
import { CardSaveSecondaryComponent } from "../../components/card-save-secondary/card-save-secondary.component";
import { InputSecondaryComponent } from "../../components/input-secondary/input-secondary.component";
import { SelectSecondaryComponent } from "../../components/select-secondary/select-secondary.component";
import { InputSearchComponent } from "../../components/input-search/input-search.component";
import { TextAreaSecondaryComponent } from "../../components/text-area-secondary/text-area-secondary.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses-page',
  imports: [
    CommonModule,
    ButtonIconLabelQuaternaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    DatePickerSetComponent,
    TableFilterComponent,
    SharedModalComponent,
    CardSaveSecondaryComponent,
    InputSecondaryComponent,
    SelectSecondaryComponent,
    InputSearchComponent,
    TextAreaSecondaryComponent,
    FormsModule
],
  templateUrl: './expenses-page.component.html',
  styleUrl: './expenses-page.component.css',
})
export class ExpensesPageComponent {
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
  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar gastos',
    },
  ];

  //sobre la tabla

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
      key: 'acount',
      label: 'Cuenta',
      typeFilter: 'input',
    },

    {
      key: 'users',
      label: 'Usuario',
      typeFilter: 'input',
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

    optionsAccount: { label: string; value: string | number }[] = [
    {
      label: 'Efectivo (PEN)',
      value: 1,
    },
  ];


  //para ver o no comprobante en el formulario
  withVoucher:boolean=false;

    //opciones para comprobante
  optionsVoucher: { label: string; value: string | number }[] = [
    {
      label: 'Boleta',
      value: 1,
    },
    {
      label: 'Factura',
      value: 2,
    },
  ];

}
