import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { InputSearchComponent } from "../../components/input-search/input-search.component";
import { ButtonIconLabelTerciaryComponent } from "../../components/button-icon-label-terciary/button-icon-label-terciary.component";
import { BarSearchAddProductServiceComponent } from "../../components/bar-search-add-product-service/bar-search-add-product-service.component";
import { EmptyCardComponent } from "../../components/empty-card/empty-card.component";
import { InputEditComponent } from "../../components/input-edit/input-edit.component";
import { BarCurrencyTypeDateComponent } from "../../components/bar-currency-type-date/bar-currency-type-date.component";
import { ButtonAddUnderlineComponent } from "../../components/button-add-underline/button-add-underline.component";

@Component({
  selector: 'app-add-edit-quotations-page',
  imports: [InputSearchComponent, ButtonIconLabelTerciaryComponent, BarSearchAddProductServiceComponent, EmptyCardComponent, InputEditComponent, BarCurrencyTypeDateComponent, ButtonAddUnderlineComponent],
  templateUrl: './add-edit-quotations-page.component.html',
  styleUrl: './add-edit-quotations-page.component.css'
})
export class AddEditQuotationsPageComponent {
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
