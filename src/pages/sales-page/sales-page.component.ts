import { AfterViewInit, Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';
import { ButtonIconLabelTerciaryComponent } from '../../components/button-icon-label-terciary/button-icon-label-terciary.component';
import { ButtonSecondaryComponent } from "../../components/button-secondary/button-secondary.component";
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
@Component({
  selector: 'app-sales-page',
  imports: [ButtonIconLabelTerciaryComponent, ButtonSecondaryComponent,DatePickerComponent],
  templateUrl: './sales-page.component.html',
  styleUrl: './sales-page.component.css'
})
export class SalesPageComponent implements AfterViewInit {
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
