import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAmountSolesDolarsUnitaryComponent } from './card-amount-soles-dolars-unitary.component';

describe('CardAmountSolesDolarsUnitaryComponent', () => {
  let component: CardAmountSolesDolarsUnitaryComponent;
  let fixture: ComponentFixture<CardAmountSolesDolarsUnitaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAmountSolesDolarsUnitaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAmountSolesDolarsUnitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
