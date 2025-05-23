import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconTerciaryComponent } from './button-icon-terciary.component';

describe('ButtonIconTerciaryComponent', () => {
  let component: ButtonIconTerciaryComponent;
  let fixture: ComponentFixture<ButtonIconTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
