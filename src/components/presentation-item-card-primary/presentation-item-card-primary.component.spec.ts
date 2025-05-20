import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationItemCardPrimaryComponent } from './presentation-item-card-primary.component';

describe('PresentationItemCardPrimaryComponent', () => {
  let component: PresentationItemCardPrimaryComponent;
  let fixture: ComponentFixture<PresentationItemCardPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationItemCardPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationItemCardPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
