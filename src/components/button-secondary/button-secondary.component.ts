import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-secondary',
  imports: [CommonModule],
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.css'
})
export class ButtonSecondaryComponent {
@Input() nombre:string=''
@Input() variant:string='red'
}
