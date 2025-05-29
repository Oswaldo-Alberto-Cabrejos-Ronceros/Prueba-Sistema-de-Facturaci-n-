import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { BarSearchAddProductServiceComponent } from '../../components/bar-search-add-product-service/bar-search-add-product-service.component';
import { EmptyCardComponent } from '../../components/empty-card/empty-card.component';
import { ButtonTerciaryComponent } from '../../components/button-terciary/button-terciary.component';
import { BarAddPayComponent } from '../../components/bar-add-pay/bar-add-pay.component';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { IconComponent } from '../../components/icon/icon.component';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { SharedModalComponent } from '../../components/shared-modal/shared-modal.component';
import { CardSavePrimaryComponent } from '../../components/card-save-primary/card-save-primary.component';
import { CheckboxPrimaryComponent } from '../../components/checkbox-primary/checkbox-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-sale-page',
  imports: [
    BarSearchAddProductServiceComponent,CommonModule,
    EmptyCardComponent,
    ButtonTerciaryComponent,
    BarAddPayComponent,
    InputSearchComponent,
    IconComponent,
    ButtonIconLabelTerciaryComponent,
    SharedModalComponent,
    CardSavePrimaryComponent,
    CheckboxPrimaryComponent,
  ],
  templateUrl: './add-edit-sale-page.component.html',
  styleUrl: './add-edit-sale-page.component.css',
})
export class AddEditSalePageComponent {
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
}
