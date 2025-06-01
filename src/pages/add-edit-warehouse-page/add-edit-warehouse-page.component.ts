import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { EmptyCardComponent } from '../../components/empty-card/empty-card.component';
import { InputTerciaryComponent } from '../../components/input-terciary/input-terciary.component';
import { TextAreaTerciaryComponent } from '../../components/text-area-terciary/text-area-terciary.component';
import { SelectTerciaryComponent } from '../../components/select-terciary/select-terciary.component';
import { SelectInputSetTerciaryComponent } from '../../components/select-input-set-terciary/select-input-set-terciary.component';
import { InputDoubleTerciaryComponent } from '../../components/input-double-terciary/input-double-terciary.component';
import { InputSearchComponent } from "../../components/input-search/input-search.component";
import { ButtonAddUnderlineComponent } from "../../components/button-add-underline/button-add-underline.component";
import { BarSearchAddProductComponent } from "../../components/bar-search-add-product/bar-search-add-product.component";

@Component({
  selector: 'app-add-edit-warehouse-page',
  imports: [
    EmptyCardComponent,
    InputTerciaryComponent,
    TextAreaTerciaryComponent,
    SelectTerciaryComponent,
    SelectInputSetTerciaryComponent,
    InputDoubleTerciaryComponent,
    InputSearchComponent,
    ButtonAddUnderlineComponent,
    BarSearchAddProductComponent
],
  templateUrl: './add-edit-warehouse-page.component.html',
  styleUrl: './add-edit-warehouse-page.component.css',
})
export class AddEditWarehousePageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4 -mt-5';
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

  //opciones para el tipo operacion
  optionsTypeOperation: { label: string; value: string | number }[] = [
    {
      label: 'Entrada',
      value: 1,
    },
    {
      label: 'Salida',
      value: 2,
    },
  ];

  //opciones de guia

  optionsGuide: { label: string; value: string | number }[] = [
    {
      label: 'Guía de remisión remitente',
      value: 1,
    },
    {
      label: 'Guía de remisión transportista',
      value: 2,
    },
  ];

  //opciones motivos de translado

  optionsReasonsTrasfer: { label: string; value: string | number }[] = [
    {
      label: 'Venta',
      value: 1,
    },
    {
      label: 'Compra',
      value: 2,
    },
    {
      label: 'Devolución',
      value: 3,
    },
    {
      label: 'Consignación',
      value: 4,
    },
  ];
}
