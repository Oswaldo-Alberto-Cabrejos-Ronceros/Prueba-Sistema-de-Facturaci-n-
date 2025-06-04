import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddPackageComponent } from './card-add-package.component';

describe('CardAddPackageComponent', () => {
  let component: CardAddPackageComponent;
  let fixture: ComponentFixture<CardAddPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAddPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAddPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
