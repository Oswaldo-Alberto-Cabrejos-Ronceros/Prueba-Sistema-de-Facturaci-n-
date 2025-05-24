import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsKardexPageComponent } from './reports-kardex-page.component';

describe('ReportsKardexPageComponent', () => {
  let component: ReportsKardexPageComponent;
  let fixture: ComponentFixture<ReportsKardexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsKardexPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsKardexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
