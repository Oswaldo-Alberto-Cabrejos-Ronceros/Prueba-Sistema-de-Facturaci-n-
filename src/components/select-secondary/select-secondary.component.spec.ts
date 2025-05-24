import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSecondaryComponent } from './select-secondary.component';

describe('SelectSecondaryComponent', () => {
  let component: SelectSecondaryComponent;
  let fixture: ComponentFixture<SelectSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
