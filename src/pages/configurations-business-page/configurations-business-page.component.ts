import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { CardOption, CardOptionsComponent } from '../../components/card-options/card-options.component';
import { BusinessCharacteristicsCardComponent } from "./components/business-characteristics-card/business-characteristics-card.component";
import { BusinessPredeterminedObservationsCardComponent } from "./components/business-predetermined-observations-card/business-predetermined-observations-card.component";
import { BusinessReferralGuidesCardComponent } from "./components/business-referral-guides-card/business-referral-guides-card.component";

@Component({
  selector: 'app-configurations-business-page',
  imports: [CardOptionsComponent, BusinessCharacteristicsCardComponent, BusinessPredeterminedObservationsCardComponent, BusinessReferralGuidesCardComponent],
  templateUrl: './configurations-business-page.component.html',
  styleUrl: './configurations-business-page.component.css'
})
export class ConfigurationsBusinessPageComponent implements AfterViewInit{

  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  //opciones para el card-options
  @ViewChild('characteristics') characteristicsCard!:TemplateRef<any>
  @ViewChild('predeterminedObservations') predeterminedObservations!:TemplateRef<any>
  @ViewChild('referralGuides') referralGuides!:TemplateRef<any>
  constructor(private cdr: ChangeDetectorRef) {}
  //opciones
  options:CardOption[]=[]
  ngAfterViewInit(): void {
    this.options =[
      {
        key:'characteristics',
        label:'Caracteristicas',
        template:this.characteristicsCard
      },
            {
        key:'predeterminedObservations',
        label:'Observaciones predeterminadas',
        template:this.predeterminedObservations
      },
                  {
        key:'referralGuides',
        label:'Guías de referencias',
        template:this.referralGuides
      }
    ]
     this.cdr.detectChanges();
  }
}
