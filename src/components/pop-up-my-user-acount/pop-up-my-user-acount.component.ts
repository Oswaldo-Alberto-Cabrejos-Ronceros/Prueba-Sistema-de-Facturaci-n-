import { Component, ElementRef, Input } from '@angular/core';
import { PopUpCardComponent } from '../pop-up-card/pop-up-card.component';
import { RouterLink } from '@angular/router';
import { ButtonIconLabelUnderlineComponent } from '../button-icon-label-underline/button-icon-label-underline.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up-my-user-acount',
  imports: [
    PopUpCardComponent,
    RouterLink,
    ButtonIconLabelUnderlineComponent,
    CommonModule,
  ],
  templateUrl: './pop-up-my-user-acount.component.html',
  styleUrl: './pop-up-my-user-acount.component.css',
})
export class PopUpMyUserAcountComponent {
  //necesarios para pop-up-card
  @Input() visible = false;
  @Input() trigger!: ElementRef;


  options: { title: string; to: string }[] = [
    {
      title: 'Mi Cuenta',
      to: '',
    },
    {
      title: 'Soporte',
      to: '',
    },
    {
      title: 'Pagos',
      to: '',
    },
    {
      title: 'Conectar Sunat',
      to: '',
    },
  ];
  //nombre de le empresa seteado
  nameCompany: string = 'Exportaciones';
}
