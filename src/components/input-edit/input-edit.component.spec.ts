import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditComponent } from './input-edit.component';

describe('InputEditComponent', () => {
  let component: InputEditComponent;
  let fixture: ComponentFixture<InputEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
