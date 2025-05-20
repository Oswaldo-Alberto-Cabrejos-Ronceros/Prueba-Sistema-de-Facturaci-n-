import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-card',
  imports: [CommonModule],
  templateUrl: './empty-card.component.html',
  styleUrl: './empty-card.component.css'
})
export class EmptyCardComponent {
@Input() message:string='No hay datos'
@Input() large:boolean=false
}
