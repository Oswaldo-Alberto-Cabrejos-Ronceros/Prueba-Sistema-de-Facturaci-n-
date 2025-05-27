import { Component } from '@angular/core';
import { CardItemPresentationComponent } from '../../../../components/card-item-presentation/card-item-presentation.component';
import { SwitchPrimaryComponent } from '../../../../components/switch-primary/switch-primary.component';
import { TableFilterSecondaryComponent } from "../../../../components/table-filter-secondary/table-filter-secondary.component";

@Component({
  selector: 'app-business-referral-guides-card',
  imports: [CardItemPresentationComponent, SwitchPrimaryComponent, TableFilterSecondaryComponent],
  templateUrl: './business-referral-guides-card.component.html',
  styleUrl: './business-referral-guides-card.component.css',
})
export class BusinessReferralGuidesCardComponent {
  columns: {
    key: string;
    label: string;
    typeFilter: string;
    disable?: boolean;
    options?: { label: string; value: string | number }[];
    ordenable?: boolean;
    width?: string;
  }[] = [
    {
      key: 'serial',
      label: 'Serie',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[15%]',
    },
    {
      key: 'correlative',
      label: 'Correlativo',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[25%]',
    },
    {
      key: 'description',
      label: 'Descripción',
      typeFilter: 'input',
      disable: true,
      ordenable: false,
      width: 'w-[60%]',
    },
  ];

  data: { serial: string; correlative: string; description: string }[] = [
    {
      serial: 'T001',
      correlative: '00001',
      description: 'Serie Guias de Remisión Remitente',
    },
  ];
}
