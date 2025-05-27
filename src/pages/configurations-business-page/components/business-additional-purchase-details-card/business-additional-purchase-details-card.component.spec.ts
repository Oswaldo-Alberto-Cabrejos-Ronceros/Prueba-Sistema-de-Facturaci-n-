import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdditionalPurchaseDetailsCardComponent } from './business-additional-purchase-details-card.component';

describe('BusinessAdditionalPurchaseDetailsCardComponent', () => {
  let component: BusinessAdditionalPurchaseDetailsCardComponent;
  let fixture: ComponentFixture<BusinessAdditionalPurchaseDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAdditionalPurchaseDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAdditionalPurchaseDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
