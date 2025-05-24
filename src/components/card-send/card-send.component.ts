import { Component, HostBinding, Input } from '@angular/core';
import { InputSecondaryComponent } from "../input-secondary/input-secondary.component";
import { ButtonSecondaryComponent } from "../button-secondary/button-secondary.component";

@Component({
  selector: 'app-card-send',
  imports: [InputSecondaryComponent, ButtonSecondaryComponent],
  templateUrl: './card-send.component.html',
  styleUrl: './card-send.component.css'
})
export class CardSendComponent {
   @HostBinding('class') class = 'w-full'
//para titulo
@Input() title:string=''
}
