import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsClientsPageComponent } from './reports-clients-page.component';

describe('ReportsClientsPageComponent', () => {
  let component: ReportsClientsPageComponent;
  let fixture: ComponentFixture<ReportsClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsClientsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
