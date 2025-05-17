import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationsPageComponent } from './quotations-page.component';

describe('QuotationsPageComponent', () => {
  let component: QuotationsPageComponent;
  let fixture: ComponentFixture<QuotationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
