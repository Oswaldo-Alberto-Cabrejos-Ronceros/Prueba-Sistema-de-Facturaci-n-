import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelQuaternaryComponent } from "../../components/button-icon-label-quaternary/button-icon-label-quaternary.component";
import { InputSecondaryComponent } from "../../components/input-secondary/input-secondary.component";

@Component({
  selector: 'app-transactions-accounts-page',
  imports: [ButtonIconLabelQuaternaryComponent, InputSecondaryComponent],
  templateUrl: './transactions-accounts-page.component.html',
  styleUrl: './transactions-accounts-page.component.css'
})
export class TransactionsAccountsPageComponent {
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
}
