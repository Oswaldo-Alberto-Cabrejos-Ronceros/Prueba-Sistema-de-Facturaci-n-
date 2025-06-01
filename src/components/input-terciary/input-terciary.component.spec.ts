import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTerciaryComponent } from './input-terciary.component';

describe('InputTerciaryComponent', () => {
  let component: InputTerciaryComponent;
  let fixture: ComponentFixture<InputTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
