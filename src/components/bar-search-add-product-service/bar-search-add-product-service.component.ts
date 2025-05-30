import { Component, HostBinding } from '@angular/core';
import { ButtonSquareComponent } from "../button-square/button-square.component";

@Component({
  selector: 'app-bar-search-add-product-service',
  imports: [ButtonSquareComponent],
  templateUrl: './bar-search-add-product-service.component.html',
  styleUrl: './bar-search-add-product-service.component.css'
})
export class BarSearchAddProductServiceComponent {
@HostBinding('class') class = 'w-full'
//activacion del boton buscar
activeButtonSearch:boolean=true
activeButtonService:boolean=false

//para manejar activaciones de los botones
//para search
handleActivationButtons(){
  this.activeButtonSearch=!this.activeButtonSearch
  this.activeButtonService=!this.activeButtonService
}

}
