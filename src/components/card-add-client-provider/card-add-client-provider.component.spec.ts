import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddClientProviderComponent } from './card-add-client-provider.component';

describe('CardAddClientProviderComponent', () => {
  let component: CardAddClientProviderComponent;
  let fixture: ComponentFixture<CardAddClientProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAddClientProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAddClientProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
