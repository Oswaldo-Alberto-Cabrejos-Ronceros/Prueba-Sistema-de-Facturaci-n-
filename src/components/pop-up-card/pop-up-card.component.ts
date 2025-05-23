import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up-card',
  imports: [CommonModule],
  templateUrl: './pop-up-card.component.html',
  styleUrl: './pop-up-card.component.css',
})
export class PopUpCardComponent implements OnChanges {
  //visibilidad
  @Input() visible = false;
  //referencia del elemento de apertura
  @Input() trigger!: ElementRef;
  //para tamaño
  @Input() size:string='base'
  //referencia del popup
  @ViewChild('popupRef') popupRef!: ElementRef;

  //estilos para linear el elemento que lo abre
  popupStyles = {
    top: '0px',
    left: '0px',
  };

  //bandera para saber si ya esta posicionado el popup
  isReady = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible']) {
      if (this.visible) {
        this.isReady = false;
        setTimeout(() => {
          this.setPosition();
          this.isReady = true;
        });
      } else {
        this.isReady = false;
      }
    }
  }

  //eventos click
  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    //referencia de click dentro
    const clickedInside = this.popupRef?.nativeElement.contains(event.target);
    //referencia de click dentro del elemento de apertura
    const clickedTrigger = this.trigger?.nativeElement.contains(event.target);
    if (!clickedInside && !clickedTrigger) {
      this.visible = false;
    }
  }

  //evento resize
  @HostListener('window:resize')
  onResize() {
    if (this.visible) {
      this.setPosition();
    }
  }

  //funcion que establece la posicion del popup con referencia al boton de apertura
  setPosition() {
    if (!this.trigger || !this.popupRef) return;

    const rect = this.trigger.nativeElement.getBoundingClientRect();
    const reactPopUp = this.popupRef.nativeElement.getBoundingClientRect();
    //cambiamos el estilo segun las referencias
    this.popupStyles.top = `${rect.bottom + window.scrollY + 8}px`;
    this.popupStyles.left = `${
      rect.left - reactPopUp.width + rect.width + window.scrollX
    }px`;
  }
}
