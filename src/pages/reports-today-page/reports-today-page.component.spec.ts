import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTodayPageComponent } from './reports-today-page.component';

describe('ReportsTodayPageComponent', () => {
  let component: ReportsTodayPageComponent;
  let fixture: ComponentFixture<ReportsTodayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsTodayPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsTodayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
