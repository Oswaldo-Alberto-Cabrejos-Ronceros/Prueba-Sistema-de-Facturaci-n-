import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLabelUnderlineComponent } from './button-icon-label-underline.component';

describe('ButtonIconLabelUnderlineComponent', () => {
  let component: ButtonIconLabelUnderlineComponent;
  let fixture: ComponentFixture<ButtonIconLabelUnderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconLabelUnderlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconLabelUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
