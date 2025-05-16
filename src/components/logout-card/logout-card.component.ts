import { Component, HostBinding } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-logout-card',
  imports: [IconComponent],
  templateUrl: './logout-card.component.html',
  styleUrl: './logout-card.component.css'
})
export class LogoutCardComponent {
@HostBinding('class') class = 'w-full min-w-min max-w-xs py-1 gap-4 flex items-center justify-center';

}
