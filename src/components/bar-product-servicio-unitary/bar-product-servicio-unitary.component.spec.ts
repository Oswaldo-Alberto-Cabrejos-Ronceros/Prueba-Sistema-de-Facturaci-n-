import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarProductServicioUnitaryComponent } from './bar-product-servicio-unitary.component';

describe('BarProductServicioUnitaryComponent', () => {
  let component: BarProductServicioUnitaryComponent;
  let fixture: ComponentFixture<BarProductServicioUnitaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarProductServicioUnitaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarProductServicioUnitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
