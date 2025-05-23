import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsProductsPageComponent } from './reports-products-page.component';

describe('ReportsProductsPageComponent', () => {
  let component: ReportsProductsPageComponent;
  let fixture: ComponentFixture<ReportsProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsProductsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
