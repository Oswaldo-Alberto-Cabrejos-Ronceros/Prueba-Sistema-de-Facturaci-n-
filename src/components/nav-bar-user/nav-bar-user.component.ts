import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ButtonIconLabelTerciaryComponent } from '../button-icon-label-terciary/button-icon-label-terciary.component';
import { PopUpMyUserAcountComponent } from '../pop-up-my-user-acount/pop-up-my-user-acount.component';
import { NavBarUserTemplateInjectorService } from '../../services/nav-bar-user-template-injector/nav-bar-user-template-injector.service';

@Component({
  selector: 'app-nav-bar-user',
  imports: [
    CommonModule,
    ButtonIconLabelTerciaryComponent,
    PopUpMyUserAcountComponent,
  ],
  templateUrl: './nav-bar-user.component.html',
  styleUrl: './nav-bar-user.component.css',
})
export class NavBarUserComponent implements AfterViewInit {
  @HostBinding('class') class = 'w-full h-min';
  //referencias de los templates
  @ContentChild('leftTemplate', { static: false })
  leftTemplate!: TemplateRef<any>;
  rightTemplate: TemplateRef<any> | null = null;
  //para pasar la referencia al componente
  @ViewChild('triggerMyUser', { read: ElementRef })
  triggerMyUserRef!: ElementRef;

  //para obtener el rightTemplate del servicio template-injector
  constructor(
    private navBarUseTemplateInjector: NavBarUserTemplateInjectorService,
    //inyectamos la referencia del detecotr de cambios
    private cdr: ChangeDetectorRef
  ) {
    this.navBarUseTemplateInjector.rightTemplate$.subscribe((template) => {
      this.rightTemplate = template;
    });
  }

  //depues de iniciada la vista
  ngAfterViewInit(): void {
    //forzamos la deteccion de cambios
    this.cdr.detectChanges();
  }

  //para mostrar o no el pop up
  showPopup = false;
  //para variar showPopUp
  handlePopup() {
    this.showPopup = !this.showPopup;
  }
}
