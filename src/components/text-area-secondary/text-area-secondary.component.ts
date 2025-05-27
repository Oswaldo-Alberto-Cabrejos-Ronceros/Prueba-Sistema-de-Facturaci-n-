import { Component, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-text-area-secondary',
  imports: [FormsModule,CommonModule],
  templateUrl: './text-area-secondary.component.html',
  styleUrl: './text-area-secondary.component.css'
})
export class TextAreaSecondaryComponent {
@Input() name:string="";
@Input() placeholder:string="";
@Input() size:string="base"; //sm o se deja vacio para que sea base
@Input() rows:number=1
@HostBinding('class') class='w-full min-w-min'
value: string = '';
}
