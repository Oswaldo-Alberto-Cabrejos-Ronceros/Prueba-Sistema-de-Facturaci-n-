import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialMonthCardComponent } from './trial-month-card.component';

describe('TrialMonthCardComponent', () => {
  let component: TrialMonthCardComponent;
  let fixture: ComponentFixture<TrialMonthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialMonthCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialMonthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
