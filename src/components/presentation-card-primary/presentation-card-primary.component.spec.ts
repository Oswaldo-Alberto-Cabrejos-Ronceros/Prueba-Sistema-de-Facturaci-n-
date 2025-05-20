import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCardPrimaryComponent } from './presentation-card-primary.component';

describe('PresentationCardPrimaryComponent', () => {
  let component: PresentationCardPrimaryComponent;
  let fixture: ComponentFixture<PresentationCardPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationCardPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationCardPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
