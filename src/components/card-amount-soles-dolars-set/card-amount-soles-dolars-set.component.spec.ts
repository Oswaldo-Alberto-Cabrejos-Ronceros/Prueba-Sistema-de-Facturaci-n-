import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAmountSolesDolarsSetComponent } from './card-amount-soles-dolars-set.component';

describe('CardAmountSolesDolarsSetComponent', () => {
  let component: CardAmountSolesDolarsSetComponent;
  let fixture: ComponentFixture<CardAmountSolesDolarsSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAmountSolesDolarsSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAmountSolesDolarsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
