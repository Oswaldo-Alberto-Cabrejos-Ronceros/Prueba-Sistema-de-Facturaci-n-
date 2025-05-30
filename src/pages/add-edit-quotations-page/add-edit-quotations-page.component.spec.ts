import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQuotationsPageComponent } from './add-edit-quotations-page.component';

describe('AddEditQuotationsPageComponent', () => {
  let component: AddEditQuotationsPageComponent;
  let fixture: ComponentFixture<AddEditQuotationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditQuotationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditQuotationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
