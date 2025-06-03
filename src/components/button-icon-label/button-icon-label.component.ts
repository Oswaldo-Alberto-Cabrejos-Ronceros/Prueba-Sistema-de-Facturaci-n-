import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-icon-label',
  imports: [IconComponent,CommonModule],
  templateUrl: './button-icon-label.component.html',
  styleUrl: './button-icon-label.component.css'
})
export class ButtonIconLabelComponent {
@Input() name:string=''
@Input() iconName : string=''
@Input() size:string='base'
@Input() border:boolean=false
@HostBinding('class') class='h-12 w-full max-w-lg min-w-min flex items-center justify-center'
}
