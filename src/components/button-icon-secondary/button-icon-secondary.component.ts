import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon-secondary',
  imports: [],
  templateUrl: './button-icon-secondary.component.html',
  styleUrl: './button-icon-secondary.component.css'
})
export class ButtonIconSecondaryComponent {
@Input() ariaLabel:string=''
@Input() iconName:string=''
@HostBinding('class') class='w-12'
}
