import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddProductServiceComponent } from './card-add-product-service.component';

describe('CardAddProductServiceComponent', () => {
  let component: CardAddProductServiceComponent;
  let fixture: ComponentFixture<CardAddProductServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAddProductServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAddProductServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
