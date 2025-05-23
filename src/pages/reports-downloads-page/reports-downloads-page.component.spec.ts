import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDownloadsPageComponent } from './reports-downloads-page.component';

describe('ReportsDownloadsPageComponent', () => {
  let component: ReportsDownloadsPageComponent;
  let fixture: ComponentFixture<ReportsDownloadsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsDownloadsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsDownloadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
