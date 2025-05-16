import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationChooseSectorCompanyCardComponent } from './registration-choose-sector-company-card.component';

describe('RegistrationChooseSectorCompanyCardComponent', () => {
  let component: RegistrationChooseSectorCompanyCardComponent;
  let fixture: ComponentFixture<RegistrationChooseSectorCompanyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationChooseSectorCompanyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationChooseSectorCompanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
