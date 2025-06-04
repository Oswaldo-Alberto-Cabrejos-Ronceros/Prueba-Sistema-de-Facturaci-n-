import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { ButtonIconLabelTerciaryComponent } from "../button-icon-label-terciary/button-icon-label-terciary.component";
import { ButtonIconLabelQuaternaryComponent } from "../button-icon-label-quaternary/button-icon-label-quaternary.component";
import { InputTerciaryComponent } from "../input-terciary/input-terciary.component";
import { SelectTerciaryComponent } from "../select-terciary/select-terciary.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-add-client-provider',
  imports: [ButtonIconComponent,CommonModule, ButtonIconLabelTerciaryComponent, ButtonIconLabelQuaternaryComponent, InputTerciaryComponent, SelectTerciaryComponent],
  templateUrl: './card-add-client-provider.component.html',
  styleUrl: './card-add-client-provider.component.css'
})
export class CardAddClientProviderComponent {
  @HostBinding('class') class =
    'w-full max-w-2xl min-w-lg max-h-[90vh] p-8 rounded-3xl gap-4 flex flex-col bg-white dark:bg-neutral-800 relative';
  @Output() close = new EventEmitter<void>();
  onClose = () => {
    this.close.emit();
  };
  //bandera de opciones avanzadas
  advancedsOptions: boolean = false;

  //para manejar opciones avanzadas
  handleAdvancedOptions() {
    this.advancedsOptions = !this.advancedsOptions;
  }

  //para opciones de tipo
  optionsType: { label: string; value: string | number }[] = [
    {
      label: 'Cliente',
      value: 1,
    },
    {
      label: 'Proveedor',
      value: 2,
    },
        {
      label: 'Cliente/Proveedor',
      value: 2,
    }
  ];

  //opciones para genero
    optionsGender: { label: string; value: string | number }[] = [
    {
      label: 'Femenino',
      value: 1,
    },
    {
      label: 'Masculino',
      value: 2,
    },
        {
      label: 'Otro',
      value: 2,
    }
  ];
}
