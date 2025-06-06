import {
  Component,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from '../../components/button-icon-label-quaternary/button-icon-label-quaternary.component';
import { TableFilterSecondaryComponent } from '../../components/table-filter-secondary/table-filter-secondary.component';
import { ButtonIconTerciaryComponent } from '../../components/button-icon-terciary/button-icon-terciary.component';
import { PopUpOptionsComponent } from '../../components/pop-up-options/pop-up-options.component';
import { CommonModule } from '@angular/common';
import { SharedModalComponent } from "../../components/shared-modal/shared-modal.component";
import { CardSaveSecondaryComponent } from "../../components/card-save-secondary/card-save-secondary.component";
import { SelectSecondaryComponent } from "../../components/select-secondary/select-secondary.component";
import { InputSecondaryComponent } from "../../components/input-secondary/input-secondary.component";
import { TextAreaSecondaryComponent } from "../../components/text-area-secondary/text-area-secondary.component";

@Component({
  selector: 'app-transactions-accounts-page',
  imports: [
    CommonModule,
    ButtonIconLabelQuaternaryComponent,
    TableFilterSecondaryComponent,
    ButtonIconTerciaryComponent,
    PopUpOptionsComponent,
    SharedModalComponent,
    CardSaveSecondaryComponent,
    SelectSecondaryComponent,
    InputSecondaryComponent,
    TextAreaSecondaryComponent
],
  templateUrl: './transactions-accounts-page.component.html',
  styleUrl: './transactions-accounts-page.component.css',
})
export class TransactionsAccountsPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
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
    options?: { label: string; value: string | number }[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'name',
      label: 'Nombre',
      typeFilter: 'input',
      width: 'w-[90%]',
    },
    {
      key: 'actions',
      label: 'Acciones',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[10%]',
    },
  ];

  cuentas = [
    {
      name: 'Luis Alberto',
    },
    {
      name: 'Carlos Rodrigo',
    },
  ];

  //sobre exportar

  optionsExport: { title: string; iconName: string }[] = [
    {
      title: 'Borrar',
      iconName: 'delete',
    },
  ];

  activePopUpIndex: number | null = null;

  handlePopUpExport(index: number) {
    this.activePopUpIndex = this.activePopUpIndex === index ? null : index;
  }

  //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };

  //para opciones de tipo

  optionsType: { label: string; value: string | number }[] = [
    {
      label: 'Activo',
      value: 1,
    },
    {
      label: 'Pasivo',
      value: 2,
    },
    {
      label: 'Capital',
      value: 3,
    },
  ];

  //para opciones de moneda

  optionsExchange: { label: string; value: string | number }[] = [
    {
      label: 'PEN (S/) - Soles',
      value: 1,
    },
    {
      label: 'USD ($) - Dólares Americanos',
      value: 2,
    },
  ];
}
