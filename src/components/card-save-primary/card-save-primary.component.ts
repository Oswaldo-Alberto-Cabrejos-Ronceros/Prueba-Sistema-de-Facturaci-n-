import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { ButtonIconLabelQuaternaryComponent } from "../button-icon-label-quaternary/button-icon-label-quaternary.component";
import { ButtonIconLabelTerciaryComponent } from "../button-icon-label-terciary/button-icon-label-terciary.component";

@Component({
  selector: 'app-card-save-primary',
  imports: [ButtonIconComponent, ButtonIconLabelQuaternaryComponent, ButtonIconLabelTerciaryComponent],
  templateUrl: './card-save-primary.component.html',
  styleUrl: './card-save-primary.component.css'
})
export class CardSavePrimaryComponent {
  @HostBinding('class') class =
    'w-full max-w-xl min-w-lg h-[90vh] p-8 rounded-3xl gap-4 flex flex-col bg-white dark:bg-neutral-800 relative';
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();
  onClose = () => {
    this.close.emit();
  };
}
