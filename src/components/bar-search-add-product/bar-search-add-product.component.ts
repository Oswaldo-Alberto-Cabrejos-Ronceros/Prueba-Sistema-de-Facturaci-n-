import { Component, HostBinding, Input } from '@angular/core';
import { ButtonSquareComponent } from "../button-square/button-square.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar-search-add-product',
  imports: [ButtonSquareComponent,CommonModule],
  templateUrl: './bar-search-add-product.component.html',
  styleUrl: './bar-search-add-product.component.css'
})
export class BarSearchAddProductComponent {
@HostBinding('class') class = 'w-full'
@Input() withIGV:boolean=true
@Input() withPriceUnitary=true
}
