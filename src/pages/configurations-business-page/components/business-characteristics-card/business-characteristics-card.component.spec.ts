import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCharacteristicsCardComponent } from './business-characteristics-card.component';

describe('BusinessCharacteristicsCardComponent', () => {
  let component: BusinessCharacteristicsCardComponent;
  let fixture: ComponentFixture<BusinessCharacteristicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessCharacteristicsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessCharacteristicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
