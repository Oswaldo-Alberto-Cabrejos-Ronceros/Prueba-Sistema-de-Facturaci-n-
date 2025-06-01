import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCurrencyTypeDateComponent } from './bar-currency-type-date.component';

describe('BarCurrencyTypeDateComponent', () => {
  let component: BarCurrencyTypeDateComponent;
  let fixture: ComponentFixture<BarCurrencyTypeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarCurrencyTypeDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarCurrencyTypeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
