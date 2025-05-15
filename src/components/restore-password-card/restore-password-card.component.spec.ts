import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordCardComponent } from './restore-password-card.component';

describe('RestorePasswordCardComponent', () => {
  let component: RestorePasswordCardComponent;
  let fixture: ComponentFixture<RestorePasswordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestorePasswordCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestorePasswordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
