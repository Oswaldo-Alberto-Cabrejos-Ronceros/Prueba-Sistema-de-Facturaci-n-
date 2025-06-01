import { Component, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-button-add-underline',
  imports: [IconComponent],
  templateUrl: './button-add-underline.component.html',
  styleUrl: './button-add-underline.component.css'
})
export class ButtonAddUnderlineComponent {
@Input() label:string=''
@Input() iconName:string=''
}
