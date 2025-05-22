import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSecondaryComponent } from './input-secondary.component';

describe('InputSecondaryComponent', () => {
  let component: InputSecondaryComponent;
  let fixture: ComponentFixture<InputSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
