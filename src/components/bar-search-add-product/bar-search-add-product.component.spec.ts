import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSearchAddProductComponent } from './bar-search-add-product.component';

describe('BarSearchAddProductComponent', () => {
  let component: BarSearchAddProductComponent;
  let fixture: ComponentFixture<BarSearchAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarSearchAddProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSearchAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
