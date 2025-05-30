import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSalePageComponent } from './add-edit-sale-page.component';

describe('AddEditSalePageComponent', () => {
  let component: AddEditSalePageComponent;
  let fixture: ComponentFixture<AddEditSalePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditSalePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
