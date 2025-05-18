import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar-drop-down',
  imports: [IconComponent, CommonModule,RouterLink,RouterModule],
  templateUrl: './nav-bar-drop-down.component.html',
  styleUrl: './nav-bar-drop-down.component.css',
})
export class NavBarDropDownComponent {
  @Input() options: { title: string; to: string }[] = [];

      //referencia del boton de apertura
  @ViewChild('buttonRef') buttonRef!: ElementRef;
    //referencia de la carta de opciones
  @ViewChild('cardOptionsRef') cardOptionsRef!: ElementRef;

  //opcion seleccionada
  optionSelected: number = 0;

  //bandera para ver o no el menu

  visible: boolean = false;

  //para menejar visible

  handleVisible() {
    this.visible = !this.visible;
  }

  //para cerrar si se hace click fuera de la carta de opciones

    //eventos click
  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    //referencia de click dentro
    const clickedInside = this.cardOptionsRef?.nativeElement.contains(event.target);
    //referencia de click dentro del elemento de apertura
    const clickedTrigger = this.buttonRef?.nativeElement.contains(event.target);
    if (!clickedInside && !clickedTrigger) {
      this.visible = false;
    }
  }

}
