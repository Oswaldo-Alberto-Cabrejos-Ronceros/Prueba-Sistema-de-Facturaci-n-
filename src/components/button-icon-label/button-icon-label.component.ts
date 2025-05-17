import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-button-icon-label',
  imports: [IconComponent],
  templateUrl: './button-icon-label.component.html',
  styleUrl: './button-icon-label.component.css'
})
export class ButtonIconLabelComponent {
@Input() name:string=''
@Input() iconName : string=''
@HostBinding('class') class='h-12 w-full max-w-lg min-w-min flex items-center justify-center'
}
