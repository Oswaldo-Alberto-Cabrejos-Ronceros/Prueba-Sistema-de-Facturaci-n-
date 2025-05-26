import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { TableFilterSecondaryComponent } from "../../components/table-filter-secondary/table-filter-secondary.component";
import { SwitchPrimaryComponent } from "../../components/switch-primary/switch-primary.component";

@Component({
  selector: 'app-configurations-taxes-page',
  imports: [TableFilterSecondaryComponent, SwitchPrimaryComponent],
  templateUrl: './configurations-taxes-page.component.html',
  styleUrl: './configurations-taxes-page.component.css'
})
export class ConfigurationsTaxesPageComponent {
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
    options?: string[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'name',
      label: 'Nombre',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[55%]',
    },
    {
      key: 'abreviatura',
      label: 'Abreviatura',
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
      width: 'w-[15%]',
    },
            {
      key: 'active',
      label: 'Activar',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[10%]',
    }
  ];

  taxes:{name:string,abbreviation:string,default:boolean,active:boolean}[]=[
    {
      name: 'IGV',
      abbreviation: 'IGV',
      default: true,
      active: true
    },
        {
      name: 'Exonerado',
      abbreviation: 'EXON',
      default: false,
      active: false
    },
            {
      name: 'Inafecto',
      abbreviation: 'INAF',
      default: false,
      active: true
    }
  ]

}
