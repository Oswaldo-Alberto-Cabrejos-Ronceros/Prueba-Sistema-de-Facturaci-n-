import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-outline-primary',
  imports: [CommonModule],
  templateUrl: './button-outline-primary.component.html',
  styleUrl: './button-outline-primary.component.css'
})
export class ButtonOutlinePrimaryComponent {
@HostBinding('class') class='w-full min-w-max max-w-lg h-min rounded-xl'
@Input() label:string=''
@Input() iconName:string=''
@Input() ariaLabel:string=''
}
