import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-bar-add-pay',
  imports: [],
  templateUrl: './bar-add-pay.component.html',
  styleUrl: './bar-add-pay.component.css'
})
export class BarAddPayComponent {
@HostBinding('class') class = 'w-full'

}
