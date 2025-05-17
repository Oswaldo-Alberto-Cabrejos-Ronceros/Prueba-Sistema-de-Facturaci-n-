import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';

@Component({
  selector: 'app-billing-page',
  imports: [ButtonIconLabelTerciaryComponent],
  templateUrl: './billing-page.component.html',
  styleUrl: './billing-page.component.css'
})
export class BillingPageComponent {
@HostBinding('class') class = 'flex-1 flex flex-col'

  //referencia al rightTemplatePersonalizado
  @ViewChild('customRightTemplate') customRightTemplate!:TemplateRef<any>
  //inyectamos servicio template-injector
  constructor(private navBarUserTemplateInjector: NavBarUserTemplateInjectorService){
  }
  ngAfterViewInit(): void {
    this.navBarUserTemplateInjector.setRightTemplate(this.customRightTemplate);
  }

}
