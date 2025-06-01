import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPurchasesPageComponent } from './add-edit-purchases-page.component';

describe('AddEditPurchasesPageComponent', () => {
  let component: AddEditPurchasesPageComponent;
  let fixture: ComponentFixture<AddEditPurchasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditPurchasesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPurchasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
