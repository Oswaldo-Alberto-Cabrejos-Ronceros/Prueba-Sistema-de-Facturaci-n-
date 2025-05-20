import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsAccountsPageComponent } from './transactions-accounts-page.component';

describe('TransactionsAccountsPageComponent', () => {
  let component: TransactionsAccountsPageComponent;
  let fixture: ComponentFixture<TransactionsAccountsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsAccountsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsAccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
