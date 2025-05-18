import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon-label-quaternary',
  imports: [CommonModule],
  templateUrl: './button-icon-label-quaternary.component.html',
  styleUrl: './button-icon-label-quaternary.component.css'
})
export class ButtonIconLabelQuaternaryComponent {
@Input() label:string=''
@Input() iconName:string=''
@HostBinding('class') class='min-w-min h-min'
}
