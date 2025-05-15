import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCompanyDataCardComponent } from './registration-company-data-card.component';

describe('RegistrationCompanyDataCardComponent', () => {
  let component: RegistrationCompanyDataCardComponent;
  let fixture: ComponentFixture<RegistrationCompanyDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationCompanyDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCompanyDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
