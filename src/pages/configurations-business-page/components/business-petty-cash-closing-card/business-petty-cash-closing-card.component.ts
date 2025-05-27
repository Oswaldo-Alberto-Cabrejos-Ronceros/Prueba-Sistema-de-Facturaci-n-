import { Component } from '@angular/core';
import { InputSecondaryComponent } from "../../../../components/input-secondary/input-secondary.component";
import { SelectSecondaryComponent } from "../../../../components/select-secondary/select-secondary.component";
import { ButtonSecondaryComponent } from "../../../../components/button-secondary/button-secondary.component";

@Component({
  selector: 'app-business-petty-cash-closing-card',
  imports: [InputSecondaryComponent, SelectSecondaryComponent, ButtonSecondaryComponent],
  templateUrl: './business-petty-cash-closing-card.component.html',
  styleUrl: './business-petty-cash-closing-card.component.css'
})
export class BusinessPettyCashClosingCardComponent {
optionHours:{label:string,value:number}[]=[
  {
    label: 'AM',
    value: 1
  },
    {
    label: 'PM',
    value: 2
  }
]
}
