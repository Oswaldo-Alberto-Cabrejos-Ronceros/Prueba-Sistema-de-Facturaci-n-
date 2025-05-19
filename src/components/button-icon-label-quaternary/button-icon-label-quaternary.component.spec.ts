import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLabelQuaternaryComponent } from './button-icon-label-quaternary.component';

describe('ButtonIconLabelQuaternaryComponent', () => {
  let component: ButtonIconLabelQuaternaryComponent;
  let fixture: ComponentFixture<ButtonIconLabelQuaternaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconLabelQuaternaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconLabelQuaternaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
