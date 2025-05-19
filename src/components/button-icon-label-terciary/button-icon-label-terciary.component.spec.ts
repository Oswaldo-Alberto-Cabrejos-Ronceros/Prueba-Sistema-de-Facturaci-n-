import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLabelTerciaryComponent } from './button-icon-label-terciary.component';

describe('ButtonIconLabelTerciaryComponent', () => {
  let component: ButtonIconLabelTerciaryComponent;
  let fixture: ComponentFixture<ButtonIconLabelTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconLabelTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconLabelTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
