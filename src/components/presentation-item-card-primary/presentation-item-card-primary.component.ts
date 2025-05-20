import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-item-card-primary',
  imports: [],
  templateUrl: './presentation-item-card-primary.component.html',
  styleUrl: './presentation-item-card-primary.component.css'
})
export class PresentationItemCardPrimaryComponent {
@Input() title:string=''
@Input() content:string=''
@Input() iconName:string=''
@HostBinding('class') class='w-full max-w-lg'
}
