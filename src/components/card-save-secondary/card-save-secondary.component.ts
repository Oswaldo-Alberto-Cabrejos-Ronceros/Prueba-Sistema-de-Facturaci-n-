import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { ButtonSecondaryComponent } from "../button-secondary/button-secondary.component";

@Component({
  selector: 'app-card-save-secondary',
  imports: [ButtonIconComponent, ButtonSecondaryComponent],
  templateUrl: './card-save-secondary.component.html',
  styleUrl: './card-save-secondary.component.css'
})
export class CardSaveSecondaryComponent {
  @HostBinding('class') class =
    'w-full max-w-lg min-w-md max-h-[75vh] rounded-sm flex flex-col bg-white dark:bg-neutral-800';
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();
  onClose = () => {
    this.close.emit();
  };
}
