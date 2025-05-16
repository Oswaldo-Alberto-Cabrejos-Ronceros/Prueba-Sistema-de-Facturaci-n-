import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLabelSecondaryComponent } from './button-icon-label-secondary.component';

describe('ButtonIconLabelSecondaryComponent', () => {
  let component: ButtonIconLabelSecondaryComponent;
  let fixture: ComponentFixture<ButtonIconLabelSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconLabelSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconLabelSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
