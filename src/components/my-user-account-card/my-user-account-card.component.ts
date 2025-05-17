import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonIconLabelUnderlineComponent } from '../button-icon-label-underline/button-icon-label-underline.component';

@Component({
  selector: 'app-my-user-account-card',
  imports: [ButtonIconLabelUnderlineComponent,RouterLink,CommonModule],
  templateUrl: './my-user-account-card.component.html',
  styleUrl: './my-user-account-card.component.css'
})
export class MyUserAccountCardComponent {
options:{title:string,to:string}[]=[
  {
    title:"Mi Cuenta",
    to:''
  },
    {
    title:"Soporte",
    to:''
  },
    {
    title:"Pagos",
    to:''
  },
  {
    title:"Conectar Sunat",
    to:''
  }
]
//nombre de le empresa seteado
nameCompany:string="Exportaciones"
}
