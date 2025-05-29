import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTerciaryComponent } from './button-terciary.component';

describe('ButtonTerciaryComponent', () => {
  let component: ButtonTerciaryComponent;
  let fixture: ComponentFixture<ButtonTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
