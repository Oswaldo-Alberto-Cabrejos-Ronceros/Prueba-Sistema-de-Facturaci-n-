import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { InputPrimaryComponent } from '../input-primary/input-primary.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { SharedModalComponent } from '../shared-modal/shared-modal.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration-card',
  imports: [InputPrimaryComponent, ButtonPrimaryComponent, FormsModule,SharedModalComponent,InfoCardComponent],
  templateUrl: './registration-card.component.html',
  styleUrl: './registration-card.component.css',
})
export class RegistrationCardComponent {
  @HostBinding('class') class =
    'w-full max-w-lg px-2 pb-4 gap-4 flex flex-col items-center justify-center';
  @Output() eventNextStep = new EventEmitter();
  goToNextStep = () => {
    this.eventNextStep.emit();
    console.log('emitiendo');
  };
  //para modal
  showModal: boolean = false;
  openModal = () => {
    this.showModal = true;
  };
  closeModal = () => {
    this.showModal = false;
  };
}
