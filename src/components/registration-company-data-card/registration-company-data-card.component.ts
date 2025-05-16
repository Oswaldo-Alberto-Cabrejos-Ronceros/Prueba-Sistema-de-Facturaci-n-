import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { InputPrimaryComponent } from "../input-primary/input-primary.component";
import { ButtonPrimaryComponent } from "../button-primary/button-primary.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration-company-data-card',
  imports: [InputPrimaryComponent, ButtonPrimaryComponent,FormsModule],
  templateUrl: './registration-company-data-card.component.html',
  styleUrl: './registration-company-data-card.component.css'
})
export class RegistrationCompanyDataCardComponent {
@HostBinding('class') class = 'w-full max-w-lg px-2 pb-4 gap-4 flex flex-col items-center justify-center';
@Output() eventNextStep=new EventEmitter();
goToNextStep=()=>{
  this.eventNextStep.emit();
  console.log("emitiendo")
}
}
