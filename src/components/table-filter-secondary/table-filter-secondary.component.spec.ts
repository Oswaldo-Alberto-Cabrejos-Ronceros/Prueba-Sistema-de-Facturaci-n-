import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterSecondaryComponent } from './table-filter-secondary.component';

describe('TableFilterSecondaryComponent', () => {
  let component: TableFilterSecondaryComponent;
  let fixture: ComponentFixture<TableFilterSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFilterSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFilterSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
