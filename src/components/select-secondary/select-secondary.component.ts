import { Component, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-secondary',
  imports: [FormsModule, CommonModule],
  templateUrl: './select-secondary.component.html',
  styleUrl: './select-secondary.component.css',
})
export class SelectSecondaryComponent {
  @Input() name: string = '';
  @Input() size: string = 'base'; //sm,xs o se deja vacio para que sea base
  @Input() options: { label: string; value: string | number }[] = [];
  @HostBinding('class') class = 'w-full min-w-min';
  value: string = '';
}
