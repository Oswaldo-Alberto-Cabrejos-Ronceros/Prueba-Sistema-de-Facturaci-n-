import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { CommonModule } from '@angular/common';
import { ButtonIconLabelUnderlineComponent } from '../button-icon-label-underline/button-icon-label-underline.component';

@Component({
  selector: 'app-my-companies-card',
  imports: [
    ButtonIconComponent,
    ButtonIconLabelUnderlineComponent,
    CommonModule,
  ],
  templateUrl: './my-companies-card.component.html',
  styleUrl: './my-companies-card.component.css',
})
export class MyCompaniesCardComponent {
  companies: { title: string; selected: boolean }[] = [
    {
      title: 'EXPORTACIONES EL CHINO',
      selected: true,
    },
  ];
  @Output() close = new EventEmitter<void>();
  onClose = () => {
    this.close.emit();
  };
}
