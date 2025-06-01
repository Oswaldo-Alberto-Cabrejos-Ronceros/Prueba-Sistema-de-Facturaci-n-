import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddUnderlineComponent } from './button-add-underline.component';

describe('ButtonAddUnderlineComponent', () => {
  let component: ButtonAddUnderlineComponent;
  let fixture: ComponentFixture<ButtonAddUnderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAddUnderlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
