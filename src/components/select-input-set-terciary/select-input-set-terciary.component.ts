import { Component, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-input-set-terciary',
  imports: [FormsModule,CommonModule],
  templateUrl: './select-input-set-terciary.component.html',
  styleUrl: './select-input-set-terciary.component.css',
})
export class SelectInputSetTerciaryComponent {
  @HostBinding('class') class = 'w-full min-w-min';
  //para select
  @Input() nameSelect: string = '';
  @Input() options: { label: string; value: string | number }[] = [];
  //para input
  @Input() nameInput: string = '';
  @Input() placeholderInput: string = '';
  @Input() typeInput: string = 'text';
  valueSelect: string = '';
  @Input() size:string='sm'
  @Input() selectWidth:string='w-3/5'
   @Input() inputWidth:string='w-2/5'
}
