import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { ButtonIconLabelTerciaryComponent } from '../button-icon-label-terciary/button-icon-label-terciary.component';
import { PopUpMyUserAcountComponent } from "../pop-up-my-user-acount/pop-up-my-user-acount.component";


@Component({
  selector: 'app-nav-bar-user',
  imports: [CommonModule, ButtonIconLabelTerciaryComponent, PopUpMyUserAcountComponent],
  templateUrl: './nav-bar-user.component.html',
  styleUrl: './nav-bar-user.component.css'
})
export class NavBarUserComponent {
@HostBinding('class') class = 'w-full h-min';
//referencias de los templates
  @ContentChild('leftTemplate', { static: false }) leftTemplate!: TemplateRef<any>;
  @ContentChild('rightTemplate', { static: false }) rightTemplate!: TemplateRef<any>;
  //para pasar la referencia al componente
@ViewChild('triggerMyUser', { read: ElementRef }) triggerMyUserRef!: ElementRef;

//para mostrar o no el pop up
showPopup = false;
//para variar showPopUp
handlePopup() {
  this.showPopup = !this.showPopup;
}

}
