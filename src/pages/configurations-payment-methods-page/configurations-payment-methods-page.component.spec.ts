import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsPaymentMethodsPageComponent } from './configurations-payment-methods-page.component';

describe('ConfigurationsPaymentMethodsPageComponent', () => {
  let component: ConfigurationsPaymentMethodsPageComponent;
  let fixture: ComponentFixture<ConfigurationsPaymentMethodsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsPaymentMethodsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsPaymentMethodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
