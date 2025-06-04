import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-terciary',
  imports: [CommonModule,FormsModule],
  templateUrl: './select-terciary.component.html',
  styleUrl: './select-terciary.component.css'
})
export class SelectTerciaryComponent {
  @HostBinding('class') class = 'w-full min-w-min';
  @Input() name: string = '';
  @Input() size: string = 'base'; //sm,xs o se deja vacio para que sea base
  @Input() options: { label: string; value: string | number }[] = [];
  value: string = '1';
}
