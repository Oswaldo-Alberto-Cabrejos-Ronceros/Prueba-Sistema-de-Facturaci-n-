import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAmountSolesDolarsUnitaryComponent } from "../card-amount-soles-dolars-unitary/card-amount-soles-dolars-unitary.component";

@Component({
  selector: 'app-card-amount-soles-dolars-set',
  imports: [CommonModule, CardAmountSolesDolarsUnitaryComponent],
  templateUrl: './card-amount-soles-dolars-set.component.html',
  styleUrl: './card-amount-soles-dolars-set.component.css',
})
export class CardAmountSolesDolarsSetComponent {
  @HostBinding('class') class = 'w-full max-w-2xl';
  @Input() items: {
    iconName: string;
    title: string;
    emptyMessage?: string;
    data: {
      subtitle?: string;
      soles: number;
      dolars: number;
    }[];
  }[] = [];
}
