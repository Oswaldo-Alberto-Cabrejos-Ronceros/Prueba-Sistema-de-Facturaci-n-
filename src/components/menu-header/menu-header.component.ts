import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Output, ViewChild } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { PopUpMyUserAcountComponent } from "../pop-up-my-user-acount/pop-up-my-user-acount.component";

@Component({
  selector: 'app-menu-header',
  imports: [ButtonIconComponent, PopUpMyUserAcountComponent],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css',
})
export class MenuHeaderComponent implements AfterViewInit {
  @HostBinding('class') class = 'w-full h-min';
  //para emitir evento para abrir menu
  @Output() open = new EventEmitter<void>();
  onOpen = () => {
    this.open.emit();
  };
    //para pasar la referencia al componente
  @ViewChild('triggerMyUser', { read: ElementRef })
  triggerMyUserRef!: ElementRef;

  //inyectamos referencia del changeDetector
  constructor(private cdr:ChangeDetectorRef){
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

    //para mostrar o no el pop up de opciones de usuario
  showPopup = false;
  //para variar showPopUp
  handlePopup() {
    this.showPopup = !this.showPopup;
  }
}
