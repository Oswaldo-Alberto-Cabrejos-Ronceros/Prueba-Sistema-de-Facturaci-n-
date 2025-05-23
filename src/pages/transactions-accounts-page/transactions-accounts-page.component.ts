import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from "../../components/button-icon-label-quaternary/button-icon-label-quaternary.component";
import { TableFilterSecondaryComponent } from "../../components/table-filter-secondary/table-filter-secondary.component";
import { ButtonIconTerciaryComponent } from "../../components/button-icon-terciary/button-icon-terciary.component";

@Component({
  selector: 'app-transactions-accounts-page',
  imports: [ButtonIconLabelQuaternaryComponent, TableFilterSecondaryComponent, ButtonIconTerciaryComponent],
  templateUrl: './transactions-accounts-page.component.html',
  styleUrl: './transactions-accounts-page.component.css'
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
    options?: string[];
    ordenable?: boolean;
    width?:string
  }[] = [
    {
      key: 'name',
      label: 'Nombre',
      typeFilter: 'input',
      width:'w-[90%]'
    },
    {
      key: 'actions',
      label: 'Acciones',
      typeFilter: 'input',
      disable:true,
      ordenable:false,
       width:'w-[10%]'
    }
  ];

  cuentas=[
    {
      name:'Luis Alberto',
    },
        {
      name:'Carlos Rodrigo',
    }
  ]
}
