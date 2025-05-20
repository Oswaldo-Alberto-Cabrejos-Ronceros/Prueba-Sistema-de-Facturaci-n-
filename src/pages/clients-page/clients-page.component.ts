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
import { PresentationCardPrimaryComponent } from '../../components/presentation-card-primary/presentation-card-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-page',
  imports: [
    ButtonIconLabelQuaternaryComponent,
    ButtonIconLabelTerciaryComponent,
    PopUpOptionsComponent,
    PresentationCardPrimaryComponent,
    CommonModule,
  ],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.css',
})
export class ClientsPageComponent {
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
      title: 'Exportar clientes',
    },
  ];

  //para mostrar opciones de exportacion
  showPopUpExport = false;
  //para variar showPopUpExport
  handlePopUpExport() {
    this.showPopUpExport = !this.showPopUpExport;
  }
  //sobre carta de presentacion
  itemsCard: { title: string; content: string; iconName: string }[] = [
    {
      title: 'Registre clientes y proveedores',
      content: 'Administre sus clientes y proveedores en un solo lugar.',
      iconName: 'groups',
    },
    {
      title: 'Busque, ordene y filtre',
      content: 'Organice, busque y genere reportes según los filtros.',
      iconName: 'filter_alt',
    },
    {
      title: 'Kardex del cliente',
      content: 'Revise el historial de ventas de cada cliente.',
      iconName: 'newsstand',
    },
  ];
}
