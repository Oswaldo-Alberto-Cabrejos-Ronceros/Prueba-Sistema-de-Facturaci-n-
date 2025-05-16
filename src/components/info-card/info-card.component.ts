import { Component, HostBinding, Input } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { ButtonPrimaryComponent } from "../button-primary/button-primary.component";
@Component({
  selector: 'app-info-card',
  imports: [ButtonIconComponent, ButtonPrimaryComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @HostBinding('class') class = 'w-full max-w-3xl h-screen p-8 rounded-3xl gap-4 flex flex-col bg-neutral-100 border-2 border-neutral-900' ;
@Input() title:string=''
}
