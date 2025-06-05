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
import { CardAddUserComponent } from "../../components/card-add-user/card-add-user.component";
import { SharedModalComponent } from "../../components/shared-modal/shared-modal.component";

@Component({
  selector: 'app-users-page',
  imports: [
    CommonModule,
    ButtonIconLabelQuaternaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    DatePickerSetComponent,
    TableFilterComponent,
    CardAddUserComponent,
    SharedModalComponent
],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent {
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
      key: 'users',
      label: 'Usuarios',
      typeFilter: 'input',
    },
    {
      key: 'email',
      label: 'Email',
      typeFilter: 'input',
    },
    {
      key: 'group',
      label: 'Grupo',
      typeFilter: 'select',
      options: ['Todos', 'Admin', 'Vendedor'],
    }
  ];

  //para la activacion de la tabla
  isTableEnabled = false;

  //para manejar la activacion de la tabla
  handleEnabledTable = () => {
    this.isTableEnabled = !this.isTableEnabled;
  };

  //sobre exportar

  optionsExport: { title: string }[] = [
    {
      title: 'Exportar usuarios',
    },
  ];

        //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };


}
