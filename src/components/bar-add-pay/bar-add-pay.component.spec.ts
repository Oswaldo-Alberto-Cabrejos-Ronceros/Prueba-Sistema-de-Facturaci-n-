import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAddPayComponent } from './bar-add-pay.component';

describe('BarAddPayComponent', () => {
  let component: BarAddPayComponent;
  let fixture: ComponentFixture<BarAddPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarAddPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarAddPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
