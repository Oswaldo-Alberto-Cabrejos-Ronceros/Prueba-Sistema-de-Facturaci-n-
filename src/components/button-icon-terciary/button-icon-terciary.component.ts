import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-icon-terciary',
  imports: [],
  templateUrl: './button-icon-terciary.component.html',
  styleUrl: './button-icon-terciary.component.css',
})
export class ButtonIconTerciaryComponent {
  @Input() ariaLabel: string = '';
  @Input() iconName: string = '';
  //para exponer el ElementRef
  @ViewChild('button', { static: true }) buttonRef!: ElementRef;
  get elementRef(): any {
    return this.buttonRef;
  }
}
