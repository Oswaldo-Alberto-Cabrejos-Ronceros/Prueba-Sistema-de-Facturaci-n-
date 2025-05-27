import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-card-item-presentation',
  imports: [IconComponent],
  templateUrl: './card-item-presentation.component.html',
  styleUrl: './card-item-presentation.component.css'
})
export class CardItemPresentationComponent {
@HostBinding('class') class = 'w-full max-w-2xl';
  @Input() iconName: string = '';
  @Input() title: string = '';
  @Input() content:string=''
  }
