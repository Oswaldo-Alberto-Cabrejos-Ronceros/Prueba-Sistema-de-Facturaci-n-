import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-button-icon-label-secondary',
  imports: [IconComponent],
  templateUrl: './button-icon-label-secondary.component.html',
  styleUrl: './button-icon-label-secondary.component.css'
})
export class ButtonIconLabelSecondaryComponent {
  @Input() name:string=''
@Input() iconName : string=''
@HostBinding('class') class='min-h-12 w-full max-w-lg min-w-min flex items-center justify-center'
}
