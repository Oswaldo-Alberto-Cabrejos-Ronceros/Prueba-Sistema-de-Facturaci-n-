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
import { TableFilterComponent } from '../../components/table-filter/table-filter.component';
import { CommonModule } from '@angular/common';
import { SharedModalComponent } from "../../components/shared-modal/shared-modal.component";
import { CardAddPackageComponent } from "../../components/card-add-package/card-add-package.component";

@Component({
  selector: 'app-packages-page',
  imports: [
    ButtonIconLabelQuaternaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    TableFilterComponent,
    CommonModule,
    SharedModalComponent,
    CardAddPackageComponent
],
  templateUrl: './packages-page.component.html',
  styleUrl: './packages-page.component.css',
})
export class PackagesPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;
  //referencia del elemento que activa opciones de exportar
  @ViewChild('triggerExport', { read: ElementRef })
  triggerExportRef!: ElementRef;
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
      title: 'Exportar paquetes',
    },
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }

  columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: string[];
    ordenable?: boolean;
  }[] = [
    {
      key: 'package',
      label: 'Paquete',
      typeFilter: 'input',
    },
    {
      key: 'name',
      label: 'Nombre',
      typeFilter: 'input',
    },
    {
      key: 'state',
      label: 'Unidad',
      typeFilter: 'select',
      options: ['Todos', 'Pagado', 'Deuda'],
    },
    {
      key: 'price',
      label: 'Precio',
      typeFilter: 'input',
    },
    {
      key: 'elements',
      label: 'Elementos',
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



}
