import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
@Input() iconName:string=''
@Input() ariaLabel:string=''
@HostBinding('class') class='max-h-6 max-w-6 '
}
