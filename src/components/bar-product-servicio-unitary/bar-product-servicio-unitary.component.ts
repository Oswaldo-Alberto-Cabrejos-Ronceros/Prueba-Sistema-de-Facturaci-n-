import { Component, HostBinding } from '@angular/core';
import { ButtonSquareComponent } from "../button-square/button-square.component";

@Component({
  selector: 'app-bar-product-servicio-unitary',
  imports: [ButtonSquareComponent],
  templateUrl: './bar-product-servicio-unitary.component.html',
  styleUrl: './bar-product-servicio-unitary.component.css'
})
export class BarProductServicioUnitaryComponent {
@HostBinding('class') class = 'w-full'
}
