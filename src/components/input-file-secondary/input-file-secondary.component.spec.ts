import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFileSecondaryComponent } from './input-file-secondary.component';

describe('InputFileSecondaryComponent', () => {
  let component: InputFileSecondaryComponent;
  let fixture: ComponentFixture<InputFileSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFileSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFileSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
