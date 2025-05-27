import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPredeterminedObservationsCardComponent } from './business-predetermined-observations-card.component';

describe('BusinessPredeterminedObservationsCardComponent', () => {
  let component: BusinessPredeterminedObservationsCardComponent;
  let fixture: ComponentFixture<BusinessPredeterminedObservationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPredeterminedObservationsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPredeterminedObservationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
