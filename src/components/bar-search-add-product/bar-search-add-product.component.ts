import { Component, HostBinding } from '@angular/core';
import { ButtonSquareComponent } from "../button-square/button-square.component";

@Component({
  selector: 'app-bar-search-add-product',
  imports: [ButtonSquareComponent],
  templateUrl: './bar-search-add-product.component.html',
  styleUrl: './bar-search-add-product.component.css'
})
export class BarSearchAddProductComponent {
@HostBinding('class') class = 'w-full'
}
