import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { TableFilterSecondaryComponent } from "../../components/table-filter-secondary/table-filter-secondary.component";
import { SwitchPrimaryComponent } from "../../components/switch-primary/switch-primary.component";
import { ButtonIconTerciaryComponent } from "../../components/button-icon-terciary/button-icon-terciary.component";
import { ButtonIconLabelQuaternaryComponent } from "../../components/button-icon-label-quaternary/button-icon-label-quaternary.component";
import { SharedModalComponent } from "../../components/shared-modal/shared-modal.component";
import { CardSaveSecondaryComponent } from "../../components/card-save-secondary/card-save-secondary.component";
import { InputSearchComponent } from "../../components/input-search/input-search.component";

@Component({
  selector: 'app-configurations-units-page',
  imports: [TableFilterSecondaryComponent, SwitchPrimaryComponent, ButtonIconTerciaryComponent, ButtonIconLabelQuaternaryComponent, SharedModalComponent, CardSaveSecondaryComponent, InputSearchComponent],
  templateUrl: './configurations-units-page.component.html',
  styleUrl: './configurations-units-page.component.css',
})
export class ConfigurationsUnitsPageComponent {
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

  //columnas para la tabla
  columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: {label:string,value:string|number}[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'symbol',
      label: 'Simbolo',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[28%]',
    },
    {
      key: 'name',
      label: 'Nombre',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[28%]',
    },
    {
      key: 'default',
      label: 'Por defecto',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[28%]',
    },
    {
      key: 'delete',
      label: 'Eliminar',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[16%]',
    },
  ];

  units:{symbol:string, name:string,
    default:boolean
  }[]=[
    {
      symbol: 'ZZ',
      name: 'SERVICIO',
      default: false
    },
        {
      symbol: 'NIU',
      name: 'UNIDAD',
      default: true
    }
  ]

            //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };

}
