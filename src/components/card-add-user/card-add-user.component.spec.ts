import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddUserComponent } from './card-add-user.component';

describe('CardAddUserComponent', () => {
  let component: CardAddUserComponent;
  let fixture: ComponentFixture<CardAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAddUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
