import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdditionalSalesDetailsCardComponent } from './business-additional-sales-details-card.component';

describe('BusinessAdditionalSalesDetailsCardComponent', () => {
  let component: BusinessAdditionalSalesDetailsCardComponent;
  let fixture: ComponentFixture<BusinessAdditionalSalesDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAdditionalSalesDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAdditionalSalesDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
