import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAccountingPageComponent } from './reports-accounting-page.component';

describe('ReportsAccountingPageComponent', () => {
  let component: ReportsAccountingPageComponent;
  let fixture: ComponentFixture<ReportsAccountingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsAccountingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAccountingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
