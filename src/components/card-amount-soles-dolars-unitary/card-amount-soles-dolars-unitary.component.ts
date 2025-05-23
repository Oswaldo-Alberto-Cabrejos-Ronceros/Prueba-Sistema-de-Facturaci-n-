import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-amount-soles-dolars-unitary',
  imports: [IconComponent, CommonModule],
  templateUrl: './card-amount-soles-dolars-unitary.component.html',
  styleUrl: './card-amount-soles-dolars-unitary.component.css',
})
export class CardAmountSolesDolarsUnitaryComponent {
  @HostBinding('class') class = 'w-full max-w-2xl';
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() emptyMessage: string = '';
  @Input() data: { subtitle: string; soles: number; dolars: number }[] = [];
}
