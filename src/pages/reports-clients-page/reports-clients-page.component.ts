import { Component, HostBinding } from '@angular/core';
import { CardSendComponent } from "../../components/card-send/card-send.component";

@Component({
  selector: 'app-reports-clients-page',
  imports: [CardSendComponent],
  templateUrl: './reports-clients-page.component.html',
  styleUrl: './reports-clients-page.component.css'
})
export class ReportsClientsPageComponent {
 @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
}
