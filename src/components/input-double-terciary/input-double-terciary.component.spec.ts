import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDoubleTerciaryComponent } from './input-double-terciary.component';

describe('InputDoubleTerciaryComponent', () => {
  let component: InputDoubleTerciaryComponent;
  let fixture: ComponentFixture<InputDoubleTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDoubleTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDoubleTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
