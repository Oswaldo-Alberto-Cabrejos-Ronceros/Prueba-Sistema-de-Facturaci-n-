import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-select-card',
  imports: [],
  templateUrl: './select-card.component.html',
  styleUrl: './select-card.component.css'
})
export class SelectCardComponent {
  @Input() imgUrl = ''
  @Input() label = ''
  @Input() name=''
    @HostBinding('class') class =
    'min-h-62 max-h-96 min-w-36 max-w-64 w-full h-full flex flex-col bg-neutral-100';
}
