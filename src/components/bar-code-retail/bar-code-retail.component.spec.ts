import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCodeRetailComponent } from './bar-code-retail.component';

describe('BarCodeRetailComponent', () => {
  let component: BarCodeRetailComponent;
  let fixture: ComponentFixture<BarCodeRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarCodeRetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarCodeRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
