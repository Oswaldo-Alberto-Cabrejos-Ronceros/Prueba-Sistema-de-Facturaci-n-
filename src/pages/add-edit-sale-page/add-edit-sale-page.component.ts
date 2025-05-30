import {
  Component,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { BarSearchAddProductServiceComponent } from '../../components/bar-search-add-product-service/bar-search-add-product-service.component';
import { EmptyCardComponent } from '../../components/empty-card/empty-card.component';
import { ButtonTerciaryComponent } from '../../components/button-terciary/button-terciary.component';
import { BarAddPayComponent } from '../../components/bar-add-pay/bar-add-pay.component';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { IconComponent } from '../../components/icon/icon.component';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { SharedModalComponent } from '../../components/shared-modal/shared-modal.component';
import { CardConfigurationsBillingComponent } from '../../components/card-configurations-billing/card-configurations-billing.component';
import { BarCodeRetailComponent } from '../../components/bar-code-retail/bar-code-retail.component';
import { BarProductServicioUnitaryComponent } from '../../components/bar-product-servicio-unitary/bar-product-servicio-unitary.component';
import { PopUpOptionsCheckReturnComponent } from '../../components/pop-up-options-check-return/pop-up-options-check-return.component';
import { CommonModule } from '@angular/common';
import { TextAreaTerciaryComponent } from '../../components/text-area-terciary/text-area-terciary.component';
import { TabBarSecondaryComponent } from "../../components/tab-bar-secondary/tab-bar-secondary.component";

@Component({
  selector: 'app-add-edit-sale-page',
  imports: [
    BarSearchAddProductServiceComponent,
    EmptyCardComponent,
    ButtonTerciaryComponent,
    BarAddPayComponent,
    InputSearchComponent,
    IconComponent,
    ButtonIconLabelTerciaryComponent,
    SharedModalComponent,
    CardConfigurationsBillingComponent,
    BarCodeRetailComponent,
    BarProductServicioUnitaryComponent,
    PopUpOptionsCheckReturnComponent,
    CommonModule,
    TextAreaTerciaryComponent,
    TabBarSecondaryComponent
],
  templateUrl: './add-edit-sale-page.component.html',
  styleUrl: './add-edit-sale-page.component.css',
})
export class AddEditSalePageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4 -mt-5';
  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;
  //referencia del elemento que activa opciones venta
  @ViewChild('triggerOptionsSale', { read: ElementRef })
  triggerOptionsSaleRef!: ElementRef;
  //inyectamos servicio template-injector
  constructor(
    private navBarUserTemplateInjector: NavBarUserTemplateInjectorService
  ) {}
  ngAfterViewInit(): void {
    this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
  }

  //monto total
  totalMount: number = 0.0;

  //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };

  //opciones barra de busqueda
  optionsSearchBar: { label: string; value: boolean }[] = [
    {
      label: 'Precio unitario',
      value: false,
    },
    {
      label: 'Placa vehicular',
      value: false,
    },
  ];

  //opciones visualizaciones complementarias

  optionsComplementaryVisualizations: { label: string; value: boolean }[] = [
    {
      label: 'Valor unitario',
      value: false,
    },
    {
      label: 'Orden de compra',
      value: false,
    },
    {
      label: 'Redondeo',
      value: false,
    },
  ];

  //opciones para opciones de facturacion
  optionsBilling: { label: string; value: boolean }[] = [
    {
      label: 'Anticipos',
      value: false,
    },
    {
      label: 'Detracción',
      value: false,
    },
    {
      label: 'Percepción',
      value: false,
    },
    {
      label: 'Retención',
      value: false,
    },
    {
      label: 'Asociar guía',
      value: false,
    },
    {
      label: 'Exportación',
      value: false,
    },
  ];

  //opciones de pago

  optionsPay: { label: string; value: boolean }[] = [
    {
      label: 'Deuda por defecto',
      value: false,
    },
  ];

  //opciones para el pop up opcion venta
  optionsOptionsSale: string[] = [
    'Código de barras RETAIL',
    'Producto o Servicio',
    ' Producto o Servicio',
  ];

  //para mostrar opciones de venta
  showPopUpOptionsSale = false;

  //para manejar el pop up opciones venta
  handlePopUpOptionsSale() {
    this.showPopUpOptionsSale = !this.showPopUpOptionsSale;
  }

  optionSaleSelected: number = 1;

  //funcion que cambio la opcion seleccionada

  changeOptionSelected(option: number) {
    this.optionSaleSelected = option;
    this.handlePopUpOptionsSale();
  }

  //opcion seleccionada en el tabbar
  optionsTabBarSelected:number=0

  //para opciones de tabbar para pantallas pequeñas

  optionsTabBar:{label:string,iconName:string}[]=[
{
  label: 'Productos',
  iconName: 'inventory_2'
},
{
  label: 'Pagos',
  iconName: 'universal_currency_alt'
}
  ]

  //para manejar el cambio de navegacion
  changeOptionTabBarSelected(option:number){
    this.optionsTabBarSelected=option
    console.log(this.optionsTabBarSelected)
  }
}
