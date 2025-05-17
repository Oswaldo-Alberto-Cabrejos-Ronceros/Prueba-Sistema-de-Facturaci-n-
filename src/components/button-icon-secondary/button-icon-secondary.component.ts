import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-button-icon-secondary',
  imports: [IconComponent],
  templateUrl: './button-icon-secondary.component.html',
  styleUrl: './button-icon-secondary.component.css'
})
export class ButtonIconSecondaryComponent {
@Input() ariaLabel:string=''
@Input() iconName:string=''
@HostBinding('class') class='w-12'
}
