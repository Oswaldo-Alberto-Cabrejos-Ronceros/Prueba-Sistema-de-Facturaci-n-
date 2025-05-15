import { Component, HostBinding } from '@angular/core';
import { RestorePasswordCardComponent } from '../../components/restore-password-card/restore-password-card.component';

@Component({
  selector: 'app-restore-password-page',
  imports: [RestorePasswordCardComponent],
  templateUrl: './restore-password-page.component.html',
  styleUrl: './restore-password-page.component.css'
})
export class RestorePasswordPageComponent {
@HostBinding('class') class = 'flex flex-col flex-1 items-center justify-center';
}
