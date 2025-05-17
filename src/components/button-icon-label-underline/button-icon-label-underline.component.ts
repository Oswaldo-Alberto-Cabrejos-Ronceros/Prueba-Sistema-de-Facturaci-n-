import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button-icon-label-underline',
  imports: [IconComponent],
  templateUrl: './button-icon-label-underline.component.html',
  styleUrl: './button-icon-label-underline.component.css'
})
export class ButtonIconLabelUnderlineComponent {
  @Input() label:string=''
  @Input() iconName:string=''
@HostBinding('class') class = 'w-full min-w-min max-w-xs py-1 gap-4 flex items-center justify-center';

}
