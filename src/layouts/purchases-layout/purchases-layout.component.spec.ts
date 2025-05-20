import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesLayoutComponent } from './purchases-layout.component';

describe('PurchasesLayoutComponent', () => {
  let component: PurchasesLayoutComponent;
  let fixture: ComponentFixture<PurchasesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
