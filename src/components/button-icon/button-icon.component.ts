import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button-icon',
  imports: [IconComponent],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css'
})
export class ButtonIconComponent {
@Input() ariaLabel:string=''
@Input() iconName:string=''
}
