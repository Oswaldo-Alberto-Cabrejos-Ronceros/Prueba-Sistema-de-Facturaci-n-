import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-trial-month-card',
  imports: [],
  templateUrl: './trial-month-card.component.html',
  styleUrl: './trial-month-card.component.css'
})
export class TrialMonthCardComponent {
@HostBinding('class') class = 'w-full h-min';
}
