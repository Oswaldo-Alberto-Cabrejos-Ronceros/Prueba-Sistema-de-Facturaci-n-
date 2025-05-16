import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompaniesCardComponent } from './my-companies-card.component';

describe('MyCompaniesCardComponent', () => {
  let component: MyCompaniesCardComponent;
  let fixture: ComponentFixture<MyCompaniesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCompaniesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCompaniesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
