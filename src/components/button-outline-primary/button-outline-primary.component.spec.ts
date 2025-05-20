import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlinePrimaryComponent } from './button-outline-primary.component';

describe('ButtonOutlinePrimaryComponent', () => {
  let component: ButtonOutlinePrimaryComponent;
  let fixture: ComponentFixture<ButtonOutlinePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOutlinePrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOutlinePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
