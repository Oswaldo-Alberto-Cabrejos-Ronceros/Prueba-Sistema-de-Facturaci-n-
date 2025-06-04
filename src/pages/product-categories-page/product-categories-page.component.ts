import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { PresentationCardPrimaryComponent } from "../../components/presentation-card-primary/presentation-card-primary.component";
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from "../../components/button-icon-label-quaternary/button-icon-label-quaternary.component";
import { SharedModalComponent } from "../../components/shared-modal/shared-modal.component";
import { CardSaveSecondaryComponent } from "../../components/card-save-secondary/card-save-secondary.component";
import { InputSecondaryComponent } from "../../components/input-secondary/input-secondary.component";

@Component({
  selector: 'app-product-categories-page',
  imports: [PresentationCardPrimaryComponent, ButtonIconLabelQuaternaryComponent, SharedModalComponent, CardSaveSecondaryComponent, InputSecondaryComponent],
  templateUrl: './product-categories-page.component.html',
  styleUrl: './product-categories-page.component.css',
})
export class ProductCategoriesPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
    //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate', { static: true })
  customRightTemplate!: TemplateRef<any>;

  itemsCard: { title: string; content: string; iconName: string }[] = [
    {
      title: 'Agrupe sus productos en categorías.',
      content: 'Ayude a sus clientes a encontrar sus productos más rápido.',
      iconName: 'package_2',
    },
  ];
  //inyectamos servicio template-injector
    constructor(
      private navBarUserTemplateInjector: NavBarUserTemplateInjectorService
    ) {}
    ngAfterViewInit(): void {
      this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
    }

          //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };
}
