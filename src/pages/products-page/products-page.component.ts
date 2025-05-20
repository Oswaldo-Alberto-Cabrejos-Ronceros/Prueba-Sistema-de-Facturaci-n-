import {
  Component,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from "../../components/button-icon-label-quaternary/button-icon-label-quaternary.component";
import { ButtonIconLabelTerciaryComponent } from "../../components/button-icon-label-terciary/button-icon-label-terciary.component";
import { PopUpOptionsComponent } from "../../components/pop-up-options/pop-up-options.component";
import { CommonModule } from '@angular/common';
import { DatePickerSetComponent } from "../../components/date-picker-set/date-picker-set.component";
import { TableFilterComponent } from "../../components/table-filter/table-filter.component";

@Component({
  selector: 'app-products-page',
  imports: [CommonModule, ButtonIconLabelQuaternaryComponent, ButtonIconLabelTerciaryComponent, PopUpOptionsComponent, TableFilterComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
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
      title: 'Exportar productos',
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
      key: 'code',
      label: 'Código',
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
      key: 'quantity',
      label: 'Cantidad',
      typeFilter: 'input',
    },


        {
      key: 'category',
      label: 'Categoría',
      typeFilter: 'input',
    },
  ];

  //para la activacion de la tabla
  isTableEnabled = false;

  //para manejar la activacion de la tabla
  handleEnabledTable = () => {
    this.isTableEnabled = !this.isTableEnabled;
  };

}
