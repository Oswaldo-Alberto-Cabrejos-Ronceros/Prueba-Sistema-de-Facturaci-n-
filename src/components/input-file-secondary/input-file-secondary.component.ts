import { Component, HostBinding, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-input-file-secondary',
  imports: [IconComponent],
  templateUrl: './input-file-secondary.component.html',
  styleUrl: './input-file-secondary.component.css'
})
export class InputFileSecondaryComponent {
@HostBinding('class') class='w-full'
@Input() iconName:string='cloud_upload'
@Input() label:string='Subir archivo'
}
