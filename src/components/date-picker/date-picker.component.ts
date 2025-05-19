import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {

  @HostBinding('class') class="w-full max-w-lg"
@Input() name:string=''
@Input() placeholder:string=''
}
