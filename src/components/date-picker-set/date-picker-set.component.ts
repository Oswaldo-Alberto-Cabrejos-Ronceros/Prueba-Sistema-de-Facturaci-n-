import { Component, HostBinding } from '@angular/core';
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-picker-set',
  imports: [DatePickerComponent,CommonModule],
  templateUrl: './date-picker-set.component.html',
  styleUrl: './date-picker-set.component.css'
})
export class DatePickerSetComponent {
@HostBinding('class') class='w-full grid grid-cols-2  gap-4 md:flex md:items-center md:justify-end'

dates:{
  name:string,placeholder:string
}[]=[
  {
    name:'desde',
    placeholder:"Desde"
  },
{
    name:'hasta',
    placeholder:"Hasta"
  }
]
}
