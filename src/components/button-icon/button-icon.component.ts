import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-icon',
  imports: [IconComponent,CommonModule],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css'
})
export class ButtonIconComponent {
@Input() ariaLabel:string=''
@Input() iconName:string=''
@Input() size:string='base'
}
