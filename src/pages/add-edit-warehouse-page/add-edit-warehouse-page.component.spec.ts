import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWarehousePageComponent } from './add-edit-warehouse-page.component';

describe('AddEditWarehousePageComponent', () => {
  let component: AddEditWarehousePageComponent;
  let fixture: ComponentFixture<AddEditWarehousePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditWarehousePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditWarehousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
