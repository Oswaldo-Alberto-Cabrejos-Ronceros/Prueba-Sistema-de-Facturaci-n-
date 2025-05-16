import { Component } from '@angular/core';
import { ButtonIconComponent } from '../../../../components/button-icon/button-icon.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header-auth-layout',
  imports: [ButtonIconComponent,RouterLink],
  templateUrl: './header-auth-layout.component.html',
  styleUrl: './header-auth-layout.component.css'
})
export class HeaderAuthLayoutComponent {

}
