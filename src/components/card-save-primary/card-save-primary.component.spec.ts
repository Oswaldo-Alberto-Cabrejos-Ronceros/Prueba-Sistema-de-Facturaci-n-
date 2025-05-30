import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSavePrimaryComponent } from './card-save-primary.component';

describe('CardSavePrimaryComponent', () => {
  let component: CardSavePrimaryComponent;
  let fixture: ComponentFixture<CardSavePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSavePrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSavePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
