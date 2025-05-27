import { Component } from '@angular/core';
import { TextAreaSecondaryComponent } from "../../../../components/text-area-secondary/text-area-secondary.component";
import { ButtonSecondaryComponent } from "../../../../components/button-secondary/button-secondary.component";

@Component({
  selector: 'app-business-predetermined-observations-card',
  imports: [TextAreaSecondaryComponent, ButtonSecondaryComponent],
  templateUrl: './business-predetermined-observations-card.component.html',
  styleUrl: './business-predetermined-observations-card.component.css'
})
export class BusinessPredeterminedObservationsCardComponent {

}
