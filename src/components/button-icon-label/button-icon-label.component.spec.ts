import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLabelComponent } from './button-icon-label.component';

describe('ButtonIconLabelComponent', () => {
  let component: ButtonIconLabelComponent;
  let fixture: ComponentFixture<ButtonIconLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
