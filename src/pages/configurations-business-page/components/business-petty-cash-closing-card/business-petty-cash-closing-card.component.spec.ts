import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPettyCashClosingCardComponent } from './business-petty-cash-closing-card.component';

describe('BusinessPettyCashClosingCardComponent', () => {
  let component: BusinessPettyCashClosingCardComponent;
  let fixture: ComponentFixture<BusinessPettyCashClosingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPettyCashClosingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPettyCashClosingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
