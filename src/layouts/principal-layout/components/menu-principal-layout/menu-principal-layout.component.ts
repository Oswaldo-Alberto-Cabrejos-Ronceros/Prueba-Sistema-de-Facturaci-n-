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
import { NavItemComponent } from '../../../../components/nav-item/nav-item.component';
import { ButtonIconLabelCloseComponent } from '../../../../components/button-icon-label-close/button-icon-label-close.component';

@Component({
  selector: 'app-menu-principal-layout',
  imports: [
    ButtonIconComponent,
    ButtonIconLabelComponent,
    CommonModule,
    MyUserAccountCardComponent,
    ButtonIconLabelSecondaryComponent,
    MyCompaniesCardComponent,
    NavItemComponent,
    ButtonIconLabelCloseComponent
  ],
  templateUrl: './menu-principal-layout.component.html',
  styleUrl: './menu-principal-layout.component.css',
})
export class MenuPrincipalLayoutComponent {
  //para desplegar menu
  isDisplayedMenu = signal<boolean>(true);

  //para mostrar carta de usuario
  showCardUser = signal<boolean>(false);

  //para mostrar carta de mi empresas

  showMyCompaniesCard = signal<boolean>(false);

  //para cambiar el depliegue del menu
  changeDisplayedMenu = () => {
    this.isDisplayedMenu.update((value) => (value = !value));
  };

  //para manejar mostrar carta de usuario
  handleShowCardUser = () => {
    this.showCardUser.update((value) => (value = !value));
  };

  //para manejar mostrar carta de mis empresas

  handleShowMyCampaniesCard = () => {
    this.showMyCompaniesCard.update((value) => !value);
  };

  //referencia para carduser
  @ViewChild('cardRef', { read: ElementRef }) cardRef!: ElementRef;
  //referencia para boton que abre cardUser
  @ViewChild('buttonCardUserRef', { read: ElementRef })
  buttonCardUserRef!: ElementRef;
  //referencia para myCompaniesCard
  @ViewChild('myCompaniesCardRef', { read: ElementRef })
  myCompaniesCardRef!: ElementRef;
  //referencia para el boton que abre myCompaniesCard
  @ViewChild('buttonCompaniesCardRef', { read: ElementRef })
  buttonCompaniesCardRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    //elemento clickeado
    const clickedElement = event.target as HTMLElement;

    //todo referente a carduser
    const clickedInsideCard =
      this.cardRef?.nativeElement?.contains(clickedElement);
    const clickedInsideButton =
      this.buttonCardUserRef?.nativeElement?.contains(clickedElement);

    // Si se hace clic fuera del card Y del botón, ocultar
    if (!clickedInsideCard && !clickedInsideButton && this.showCardUser()) {
      this.showCardUser.set(false);
    }

    //todo referente a myCompaniesCard
    //click dentro de myCompaniesCard
    const clickedInsideMyCompaniesCard =
      this.myCompaniesCardRef?.nativeElement?.contains(clickedElement);
    //click dentro del botonMyCompanies
    const clickedInsideButtonMyCompniesCard =
      this.buttonCompaniesCardRef?.nativeElement?.contains(clickedElement);
    if (
      !clickedInsideMyCompaniesCard &&
      !clickedInsideButtonMyCompniesCard &&
      this.showMyCompaniesCard()
    ) {
      this.showMyCompaniesCard.set(false);
    }
  }
  //for menu
  //elementos para el menu

  menuItems: { to: string; title: string; iconName: string }[] = [
    {
      to: '/app/sales',
      title: 'Ventas',
      iconName: 'credit_card',
    },
    {
      to: '/app/restore-password',
      title: 'Compras',
      iconName: 'shopping_bag',
    },
    {
      to: '/app/login',
      title: 'Productos',
      iconName: 'inventory_2',
    },
  ];
}
