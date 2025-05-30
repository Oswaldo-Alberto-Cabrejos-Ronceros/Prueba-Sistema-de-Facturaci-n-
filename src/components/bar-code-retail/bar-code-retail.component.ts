import { Component, HostBinding } from '@angular/core';
import { ButtonSquareComponent } from '../button-square/button-square.component';

@Component({
  selector: 'app-bar-code-retail',
  imports: [ButtonSquareComponent],
  templateUrl: './bar-code-retail.component.html',
  styleUrl: './bar-code-retail.component.css',
})
export class BarCodeRetailComponent {
  @HostBinding('class') class = 'w-full';
  //activaciones
  activeButtonCode: boolean = true;
  activeButtonNome: boolean = false;

  //arreglo de posibles valores del input
  infoForInput: { placeholder: string }[] = [
    {
      placeholder: 'Ingresar código',
    },
    {
      placeholder: 'Ingresar nombre',
    },
  ];

  //input active
  inputActive: number = 0;

  //para manejar activacion de botones
  handleActivationButtons() {
    this.activeButtonCode = !this.activeButtonCode;
    this.activeButtonNome = !this.activeButtonNome;
    this.activeButtonCode ? (this.inputActive = 0) : (this.inputActive = 1);
  }
}
