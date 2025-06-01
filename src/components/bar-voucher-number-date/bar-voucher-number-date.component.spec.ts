import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarVoucherNumberDateComponent } from './bar-voucher-number-date.component';

describe('BarVoucherNumberDateComponent', () => {
  let component: BarVoucherNumberDateComponent;
  let fixture: ComponentFixture<BarVoucherNumberDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarVoucherNumberDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarVoucherNumberDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
