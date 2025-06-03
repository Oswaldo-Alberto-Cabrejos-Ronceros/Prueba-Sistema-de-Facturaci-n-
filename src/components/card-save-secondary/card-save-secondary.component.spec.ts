import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaveSecondaryComponent } from './card-save-secondary.component';

describe('CardSaveSecondaryComponent', () => {
  let component: CardSaveSecondaryComponent;
  let fixture: ComponentFixture<CardSaveSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSaveSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSaveSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
