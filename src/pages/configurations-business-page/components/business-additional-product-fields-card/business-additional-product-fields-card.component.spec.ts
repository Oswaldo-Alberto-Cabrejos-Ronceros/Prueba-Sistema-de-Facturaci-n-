import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdditionalProductFieldsCardComponent } from './business-additional-product-fields-card.component';

describe('BusinessAdditionalProductFieldsCardComponent', () => {
  let component: BusinessAdditionalProductFieldsCardComponent;
  let fixture: ComponentFixture<BusinessAdditionalProductFieldsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAdditionalProductFieldsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAdditionalProductFieldsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
