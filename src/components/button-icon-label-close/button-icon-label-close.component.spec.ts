import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLabelCloseComponent } from './button-icon-label-close.component';

describe('ButtonIconLabelCloseComponent', () => {
  let component: ButtonIconLabelCloseComponent;
  let fixture: ComponentFixture<ButtonIconLabelCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconLabelCloseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconLabelCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
