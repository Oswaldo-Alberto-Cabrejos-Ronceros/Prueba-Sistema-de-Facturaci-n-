import { Component,HostBinding } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-button-primary',
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.css'
})
export class ButtonPrimaryComponent {
@Input() nombre:string=''
@HostBinding('class') class='h-16 w-full max-w-lg flex items-center justify-center'
}
