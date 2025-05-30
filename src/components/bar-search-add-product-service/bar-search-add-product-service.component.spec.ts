import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSearchAddProductServiceComponent } from './bar-search-add-product-service.component';

describe('BarSearchAddProductServiceComponent', () => {
  let component: BarSearchAddProductServiceComponent;
  let fixture: ComponentFixture<BarSearchAddProductServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarSearchAddProductServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSearchAddProductServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
