import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-card',
  imports: [],
  templateUrl: './empty-card.component.html',
  styleUrl: './empty-card.component.css'
})
export class EmptyCardComponent {
@Input() message:string='No hay datos'
}
