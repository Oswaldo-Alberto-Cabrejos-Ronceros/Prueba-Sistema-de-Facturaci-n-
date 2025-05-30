import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button-terciary',
  imports: [],
  templateUrl: './button-terciary.component.html',
  styleUrl: './button-terciary.component.css'
})
export class ButtonTerciaryComponent {
  @Input() label:string=''
@HostBinding('class') class='w-full max-w-3xl min-w-min flex items-center justify-center'
}
