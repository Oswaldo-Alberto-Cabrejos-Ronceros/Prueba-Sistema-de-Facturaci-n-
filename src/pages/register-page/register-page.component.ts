import { Component, HostBinding, signal } from '@angular/core';
import { RegistrationCardComponent } from '../../components/registration-card/registration-card.component';
import { CommonModule } from '@angular/common';
import { RegistrationCompanyDataCardComponent } from '../../components/registration-company-data-card/registration-company-data-card.component';
import { RegistrationChooseSectorCompanyCardComponent } from '../../components/registration-choose-sector-company-card/registration-choose-sector-company-card.component';
import { ButtonIconComponent } from '../../components/button-icon/button-icon.component';
@Component({
  selector: 'app-register-page',
  imports: [
    RegistrationCardComponent,
    CommonModule,
    RegistrationCompanyDataCardComponent,
    ButtonIconComponent,
    RegistrationChooseSectorCompanyCardComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  @HostBinding('class') class = 'flex flex-col flex-1 items-center ';
  //variable reactiva para definir el numero de paso
  stepNumber = signal<number>(1);
  nextStep = () => {
    this.stepNumber.update((value) => value + 1);
  };
  previousStep = () => {
    this.stepNumber.update((value) => (value > 0 ? value - 1 : value));
  };
}
