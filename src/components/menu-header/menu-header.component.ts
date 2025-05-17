import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';

@Component({
  selector: 'app-menu-header',
  imports: [ButtonIconComponent],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css',
})
export class MenuHeaderComponent {
  @HostBinding('class') class = 'w-full h-min';
  //para emitir evento para abrir menu
  @Output() open = new EventEmitter<void>();
  onOpen = () => {
    this.open.emit();
  };
}
