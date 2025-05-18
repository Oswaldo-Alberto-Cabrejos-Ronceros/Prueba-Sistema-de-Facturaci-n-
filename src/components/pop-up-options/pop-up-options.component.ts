import { Component, ElementRef, Input } from '@angular/core';
import { PopUpCardComponent } from "../pop-up-card/pop-up-card.component";
import { CommonModule } from '@angular/common';
import { EmptyCardComponent } from '../empty-card/empty-card.component';

@Component({
  selector: 'app-pop-up-options',
  imports: [PopUpCardComponent,CommonModule,EmptyCardComponent],
  templateUrl: './pop-up-options.component.html',
  styleUrl: './pop-up-options.component.css'
})
export class PopUpOptionsComponent {
  //necesarios para pop-up-card
  @Input() visible = false;
  @Input() trigger!: ElementRef;
  //opciones
  @Input() options:{title:string}[]=[

  ]
}
