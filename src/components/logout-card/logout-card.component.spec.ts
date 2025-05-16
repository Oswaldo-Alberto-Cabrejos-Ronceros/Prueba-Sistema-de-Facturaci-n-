import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutCardComponent } from './logout-card.component';

describe('LogoutCardComponent', () => {
  let component: LogoutCardComponent;
  let fixture: ComponentFixture<LogoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
