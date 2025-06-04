import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { CardSavePrimaryComponent } from '../card-save-primary/card-save-primary.component';
import { InputTerciaryComponent } from '../input-terciary/input-terciary.component';
import { SelectTerciaryComponent } from '../select-terciary/select-terciary.component';

@Component({
  selector: 'app-card-add-user',
  imports: [
    CardSavePrimaryComponent,
    InputTerciaryComponent,
    SelectTerciaryComponent,
  ],
  templateUrl: './card-add-user.component.html',
  styleUrl: './card-add-user.component.css',
})
export class CardAddUserComponent {
  @HostBinding('class') class = 'w-full max-w-xl min-w-lg';
  @Output() close = new EventEmitter<void>();
  onClose = () => {
    this.close.emit();
  };

  //para opciones de tipo
  optionsType: { label: string; value: string | number }[] = [
    {
      label: 'Admin',
      value: 1,
    },
    {
      label: 'Vendedor',
      value: 2,
    },
    {
      label: 'Almacenero',
      value: 3,
    },
    {
      label: 'Contador',
      value: 4,
    },
  ];
}
