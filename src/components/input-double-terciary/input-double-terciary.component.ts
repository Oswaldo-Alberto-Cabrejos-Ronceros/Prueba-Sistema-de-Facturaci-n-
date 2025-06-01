import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-double-terciary',
  imports: [],
  templateUrl: './input-double-terciary.component.html',
  styleUrl: './input-double-terciary.component.css',
})
export class InputDoubleTerciaryComponent {
  //para primer input
  @Input() nameFirst: string = '';
  @Input() placeholderFirst: string = '';
  @Input() typeFirst: string = 'text';
  @Input() nameSecond: string = '';
  @Input() placeholderSecond: string = '';
  @Input() typeSecond: string = 'text';
}
