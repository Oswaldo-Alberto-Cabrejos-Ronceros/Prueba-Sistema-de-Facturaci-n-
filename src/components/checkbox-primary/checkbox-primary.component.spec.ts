import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPrimaryComponent } from './checkbox-primary.component';

describe('CheckboxPrimaryComponent', () => {
  let component: CheckboxPrimaryComponent;
  let fixture: ComponentFixture<CheckboxPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
