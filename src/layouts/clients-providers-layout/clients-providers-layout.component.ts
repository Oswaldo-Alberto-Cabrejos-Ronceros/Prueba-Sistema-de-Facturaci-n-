import { Component, HostBinding } from '@angular/core';
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clients-providers-layout',
  imports: [NavBarUserComponent,RouterOutlet],
  templateUrl: './clients-providers-layout.component.html',
  styleUrl: './clients-providers-layout.component.css'
})
export class ClientsProvidersLayoutComponent {
@HostBinding('class') class='flex-1 flex flex-col'
}
