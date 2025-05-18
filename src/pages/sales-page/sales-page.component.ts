import { AfterViewInit, Component, ElementRef, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { ButtonSecondaryComponent } from "../../components/button-secondary/button-secondary.component";
import { DatePickerSetComponent } from '../../components/date-picker-set/date-picker-set.component';
import { TableFilterComponent } from '../../components/table-filter/table-filter.component';
import { CommonModule } from '@angular/common';
import { PopUpOptionsComponent } from '../../components/pop-up-options/pop-up-options.component';

@Component({
  selector: 'app-sales-page',
  imports: [TableFilterComponent,ButtonIconLabelTerciaryComponent, ButtonSecondaryComponent, DatePickerSetComponent,PopUpOptionsComponent,CommonModule],
  templateUrl: './sales-page.component.html',
  styleUrl: './sales-page.component.css'
})
export class SalesPageComponent implements AfterViewInit {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4'

  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate') customRightTemplate!:TemplateRef<any>
  //referencia del elemtento que activa opciones de exportar
    @ViewChild('triggerExport', { read: ElementRef })
  triggerExportRef!: ElementRef;

  //inyectamos servicio template-injector
  constructor(private navBarUserTemplateInjector: NavBarUserTemplateInjectorService){
  }
  ngAfterViewInit(): void {
    this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
  }

columns:{
      key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: string[];
    ordenable?: boolean;
}[]=[
  {
    key:'sales',
    label:'Venta',
    typeFilter:'input'
  },
  {
    key:'clients',
    label:'Cliente',
    typeFilter:'input'
  },
    {
    key:'state',
    label:'Total',
    typeFilter:'select',
    options:['Todos','Pagado','Deuda']
  },
    {
    key:'date',
    label:'Fecha',
    typeFilter:'input',
    disable:true
  },
      {
    key:'docs',
    label:'Docs',
    typeFilter:'input',
    ordenable:true
  },
    {
    key:'users',
    label:'Usuarios',
    typeFilter:'input'
  }
]

//para la activacion de la tabla
isTableEnabled=false;

//sobre exportar

optionsExport:{title:string}[]=[
  {
    title:'Exportar ventas'
  },
  {
    title:'Exportar pagos'
  }
]

//para manejar la activacion de la tabla
handleEnabledTable=()=>{
  this.isTableEnabled=!this.isTableEnabled
}

//para mostrar opciones de exportacion
showPopUpExport = false
//para variar showPopUpExport
handlePopUpExport(){
  this.showPopUpExport=!this.showPopUpExport
}

}
