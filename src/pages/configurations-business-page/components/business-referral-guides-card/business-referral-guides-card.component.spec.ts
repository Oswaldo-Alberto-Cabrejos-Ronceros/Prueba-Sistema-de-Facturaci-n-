import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReferralGuidesCardComponent } from './business-referral-guides-card.component';

describe('BusinessReferralGuidesCardComponent', () => {
  let component: BusinessReferralGuidesCardComponent;
  let fixture: ComponentFixture<BusinessReferralGuidesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessReferralGuidesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessReferralGuidesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
