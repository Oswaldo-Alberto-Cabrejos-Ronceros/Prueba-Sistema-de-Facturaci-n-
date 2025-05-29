import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { BarSearchAddProductServiceComponent } from "../../components/bar-search-add-product-service/bar-search-add-product-service.component";
import { EmptyCardComponent } from "../../components/empty-card/empty-card.component";
import { ButtonTerciaryComponent } from "../../components/button-terciary/button-terciary.component";
import { BarAddPayComponent } from "../../components/bar-add-pay/bar-add-pay.component";
import { InputSearchComponent } from "../../components/input-search/input-search.component";
import { IconComponent } from "../../components/icon/icon.component";
import { ButtonIconLabelTerciaryComponent } from "../../components/button-icon-label-terciary/button-icon-label-terciary.component";

@Component({
  selector: 'app-add-edit-sale-page',
  imports: [BarSearchAddProductServiceComponent, EmptyCardComponent, ButtonTerciaryComponent, BarAddPayComponent, InputSearchComponent, IconComponent, ButtonIconLabelTerciaryComponent],
  templateUrl: './add-edit-sale-page.component.html',
  styleUrl: './add-edit-sale-page.component.css'
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
totalMount:number=0.0
}
