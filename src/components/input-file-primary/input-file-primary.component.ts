import { Component, HostBinding } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-input-file-primary',
  imports: [IconComponent],
  templateUrl: './input-file-primary.component.html',
  styleUrl: './input-file-primary.component.css'
})
export class InputFilePrimaryComponent {
  @HostBinding('class') class='w-full'
}
