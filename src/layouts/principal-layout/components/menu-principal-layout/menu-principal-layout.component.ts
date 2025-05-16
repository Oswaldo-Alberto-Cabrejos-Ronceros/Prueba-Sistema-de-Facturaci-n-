import {
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { ButtonIconComponent } from '../../../../components/button-icon/button-icon.component';
import { ButtonIconLabelComponent } from '../../../../components/button-icon-label/button-icon-label.component';
import { CommonModule } from '@angular/common';
import { MyUserAccountCardComponent } from '../../../../components/my-user-account-card/my-user-account-card.component';
import { ButtonIconLabelSecondaryComponent } from '../../../../components/button-icon-label-secondary/button-icon-label-secondary.component';
import { MyCompaniesCardComponent } from '../../../../components/my-companies-card/my-companies-card.component';

@Component({
  selector: 'app-menu-principal-layout',
  imports: [
    ButtonIconComponent,
    ButtonIconLabelComponent,
    CommonModule,
    MyUserAccountCardComponent,
    ButtonIconLabelSecondaryComponent,
    MyCompaniesCardComponent
  ],
  templateUrl: './menu-principal-layout.component.html',
  styleUrl: './menu-principal-layout.component.css',
})
export class MenuPrincipalLayoutComponent {
  //para desplegar menu
  isDisplayedMenu = signal<boolean>(true);

  //para mostrar carta de usuario
  showCardUser = signal<boolean>(false);

  //para cambiar el depliegue del menu
  changeDisplayedMenu = () => {
    this.isDisplayedMenu.update((value) => (value = !value));
  };

  //para manejar mostrar carta de usuario
  handleShowCardUser = () => {
    this.showCardUser.update((value) => (value = !value));
  };

  //referencia para carduser
  @ViewChild('cardRef', { read: ElementRef }) cardRef!: ElementRef;
  @ViewChild('buttonCardUserRef', { read: ElementRef })
  buttonCardUserRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    const clickedInsideCard =
      this.cardRef?.nativeElement?.contains(clickedElement);
    const clickedInsideButton =
      this.buttonCardUserRef?.nativeElement?.contains(clickedElement);
    console.log(clickedInsideCard, clickedInsideButton);

    // Si se hace clic fuera del card Y del botón, ocultar
    if (!clickedInsideCard && !clickedInsideButton && this.showCardUser()) {
      this.showCardUser.set(false);
      console.log('ocultar');
    }
  }
}
