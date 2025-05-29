import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfigurationsBillingComponent } from './card-configurations-billing.component';

describe('CardConfigurationsBillingComponent', () => {
  let component: CardConfigurationsBillingComponent;
  let fixture: ComponentFixture<CardConfigurationsBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConfigurationsBillingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConfigurationsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
