import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button-icon-label-terciary',
  imports: [IconComponent,CommonModule],
  templateUrl: './button-icon-label-terciary.component.html',
  styleUrl: './button-icon-label-terciary.component.css'
})
export class ButtonIconLabelTerciaryComponent {
@Input() ariaLabel:string=''
@Input() label:string=''
@Input() iconName:string=''
@HostBinding('class') class='min-w-12'
}
