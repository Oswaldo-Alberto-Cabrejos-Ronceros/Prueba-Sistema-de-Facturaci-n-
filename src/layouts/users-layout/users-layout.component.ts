import { Component, HostBinding } from '@angular/core';
import { NavBarUserComponent } from "../../components/nav-bar-user/nav-bar-user.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users-layout',
  imports: [NavBarUserComponent,RouterOutlet],
  templateUrl: './users-layout.component.html',
  styleUrl: './users-layout.component.css'
})
export class UsersLayoutComponent {
@HostBinding('class') class='flex-1 flex flex-col'
}
