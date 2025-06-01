import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from "../../components/button-icon-label-terciary/button-icon-label-terciary.component";
import { EmptyCardComponent } from "../../components/empty-card/empty-card.component";
import { BarSearchAddProductComponent } from "../../components/bar-search-add-product/bar-search-add-product.component";
import { BarVoucherNumberDateComponent } from "../../components/bar-voucher-number-date/bar-voucher-number-date.component";
import { InputFilePrimaryComponent } from "../../components/input-file-primary/input-file-primary.component";
import { BarAddPayComponent } from "../../components/bar-add-pay/bar-add-pay.component";
import { BarCurrencyTypeDateComponent } from "../../components/bar-currency-type-date/bar-currency-type-date.component";
import { InputSearchComponent } from "../../components/input-search/input-search.component";
import { ButtonAddUnderlineComponent } from "../../components/button-add-underline/button-add-underline.component";
import { SharedModalComponent } from "../../components/shared-modal/shared-modal.component";
import { CardSavePrimaryComponent } from "../../components/card-save-primary/card-save-primary.component";
import { SwitchPrimaryComponent } from "../../components/switch-primary/switch-primary.component";

@Component({
  selector: 'app-add-edit-purchases-page',
  imports: [ButtonIconLabelTerciaryComponent, EmptyCardComponent, BarSearchAddProductComponent, BarVoucherNumberDateComponent, InputFilePrimaryComponent, BarAddPayComponent, BarCurrencyTypeDateComponent, InputSearchComponent, ButtonAddUnderlineComponent, SharedModalComponent, CardSavePrimaryComponent, SwitchPrimaryComponent],
  templateUrl: './add-edit-purchases-page.component.html',
  styleUrl: './add-edit-purchases-page.component.css'
})
export class AddEditPurchasesPageComponent {
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

    totalMount:number=0.0
    debtMount:number=0.0

      //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };

}
