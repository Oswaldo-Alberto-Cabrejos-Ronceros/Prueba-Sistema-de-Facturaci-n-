import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesLayoutComponent } from './expenses-layout.component';

describe('ExpensesLayoutComponent', () => {
  let component: ExpensesLayoutComponent;
  let fixture: ComponentFixture<ExpensesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
