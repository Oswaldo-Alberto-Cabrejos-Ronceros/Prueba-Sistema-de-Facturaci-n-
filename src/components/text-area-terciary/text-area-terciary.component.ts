import { Component, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-area-terciary',
  imports: [FormsModule,CommonModule],
  templateUrl: './text-area-terciary.component.html',
  styleUrl: './text-area-terciary.component.css'
})
export class TextAreaTerciaryComponent {
@Input() name:string="";
@Input() placeholder:string="";
@Input() rows:number=1
@HostBinding('class') class='w-full min-w-min'
@Input() size:string="base";
@Input() resize:boolean=true;
value: string = '';
}
