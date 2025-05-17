import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLogoComponent } from './button-logo.component';

describe('ButtonLogoComponent', () => {
  let component: ButtonLogoComponent;
  let fixture: ComponentFixture<ButtonLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
