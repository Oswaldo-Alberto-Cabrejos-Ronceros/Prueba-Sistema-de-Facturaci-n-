import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemPresentationComponent } from './card-item-presentation.component';

describe('CardItemPresentationComponent', () => {
  let component: CardItemPresentationComponent;
  let fixture: ComponentFixture<CardItemPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
