import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconSecondaryComponent } from './button-icon-secondary.component';

describe('ButtonIconSecondaryComponent', () => {
  let component: ButtonIconSecondaryComponent;
  let fixture: ComponentFixture<ButtonIconSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
