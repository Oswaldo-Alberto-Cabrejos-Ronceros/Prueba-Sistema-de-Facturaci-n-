import { Component, HostBinding } from '@angular/core';
import { SelectCardComponent } from '../select-card/select-card.component';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
@Component({
  selector: 'app-registration-choose-sector-company-card',
  imports: [SelectCardComponent, CommonModule,ButtonPrimaryComponent],
  templateUrl: './registration-choose-sector-company-card.component.html',
  styleUrl: './registration-choose-sector-company-card.component.css',
})
export class RegistrationChooseSectorCompanyCardComponent {
  @HostBinding('class') class =
    'w-full max-w-lg px-2 pb-4 gap-4 flex flex-col items-center justify-center';

  opciones: { label: string; name: string; imgUrl: string }[] = [
    {
      label: 'Opción 1',
      name: 'opcion_1',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/1198/1198293.png',
    },
    {
      label: 'Opción 2',
      name: 'opcion_2',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/2904/2904970.png',
    },
    {
      label: 'Opción 3',
      name: 'opcion_3',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
    },
    {
      label: 'Opción 4',
      name: 'opcion_4',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png',
    },
  ];
}
