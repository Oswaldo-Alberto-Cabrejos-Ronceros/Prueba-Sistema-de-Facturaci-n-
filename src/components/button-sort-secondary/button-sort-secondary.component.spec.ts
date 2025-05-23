import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSortSecondaryComponent } from './button-sort-secondary.component';

describe('ButtonSortSecondaryComponent', () => {
  let component: ButtonSortSecondaryComponent;
  let fixture: ComponentFixture<ButtonSortSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSortSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSortSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
