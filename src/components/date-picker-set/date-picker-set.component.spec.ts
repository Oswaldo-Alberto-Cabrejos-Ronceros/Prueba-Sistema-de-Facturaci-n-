import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerSetComponent } from './date-picker-set.component';

describe('DatePickerSetComponent', () => {
  let component: DatePickerSetComponent;
  let fixture: ComponentFixture<DatePickerSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
