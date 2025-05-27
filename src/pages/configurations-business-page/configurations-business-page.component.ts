import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  CardOption,
  CardOptionsComponent,
} from '../../components/card-options/card-options.component';
import { BusinessCharacteristicsCardComponent } from './components/business-characteristics-card/business-characteristics-card.component';
import { BusinessPredeterminedObservationsCardComponent } from './components/business-predetermined-observations-card/business-predetermined-observations-card.component';
import { BusinessReferralGuidesCardComponent } from './components/business-referral-guides-card/business-referral-guides-card.component';
import { BusinessAdditionalProductFieldsCardComponent } from './components/business-additional-product-fields-card/business-additional-product-fields-card.component';
import { BusinessAdditionalPurchaseDetailsCardComponent } from './components/business-additional-purchase-details-card/business-additional-purchase-details-card.component';
import { BusinessAdditionalSalesDetailsCardComponent } from './components/business-additional-sales-details-card/business-additional-sales-details-card.component';
import { BusinessPettyCashClosingCardComponent } from './components/business-petty-cash-closing-card/business-petty-cash-closing-card.component';

@Component({
  selector: 'app-configurations-business-page',
  imports: [
    CardOptionsComponent,
    BusinessCharacteristicsCardComponent,
    BusinessPredeterminedObservationsCardComponent,
    BusinessReferralGuidesCardComponent,
    BusinessAdditionalProductFieldsCardComponent,
    BusinessAdditionalPurchaseDetailsCardComponent,
    BusinessAdditionalSalesDetailsCardComponent,
    BusinessPettyCashClosingCardComponent,
  ],
  templateUrl: './configurations-business-page.component.html',
  styleUrl: './configurations-business-page.component.css',
})
export class ConfigurationsBusinessPageComponent implements AfterViewInit {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //opciones para el card-options
  @ViewChild('characteristics') characteristicsCard!: TemplateRef<any>;
  @ViewChild('predeterminedObservations')
  predeterminedObservations!: TemplateRef<any>;
  @ViewChild('referralGuides') referralGuides!: TemplateRef<any>;
  @ViewChild('additionalProductFields')
  additionalProductFields!: TemplateRef<any>;
  @ViewChild('additionalPurchaseDetails')
  additionalPurchaseDetails!: TemplateRef<any>;
  @ViewChild('additionalSalesDetails')
  additionalSalesDetails!: TemplateRef<any>;
  @ViewChild('pettyCashClosing') pettyCashClosing!: TemplateRef<any>;
  constructor(private cdr: ChangeDetectorRef) {}
  //opciones
  options: CardOption[] = [];
  ngAfterViewInit(): void {
    this.options = [
      {
        key: 'characteristics',
        label: 'Caracteristicas',
        template: this.characteristicsCard,
      },
      {
        key: 'predeterminedObservations',
        label: 'Observaciones predeterminadas',
        template: this.predeterminedObservations,
      },
      {
        key: 'referralGuides',
        label: 'Guías de referencias',
        template: this.referralGuides,
      },
      {
        key: 'additionalProductFields',
        label: 'Campos adicionales de los productos',
        template: this.additionalProductFields,
      },

      {
        key: 'additionalSalesDetails',
        label: 'Campos adicionales en detalle venta',
        template: this.additionalSalesDetails,
      },
      {
        key: 'additionalPurchaseDetails',
        label: 'Campos adicionales en detalle compra',
        template: this.additionalPurchaseDetails,
      },
      {
        key: 'pettyCashClosing',
        label: 'Cierre de caja chica',
        template: this.pettyCashClosing,
      },
    ];
    this.cdr.detectChanges();
  }
}
