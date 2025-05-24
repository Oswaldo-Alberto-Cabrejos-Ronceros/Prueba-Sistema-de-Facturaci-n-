import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPrimaryComponent } from './switch-primary.component';

describe('SwitchPrimaryComponent', () => {
  let component: SwitchPrimaryComponent;
  let fixture: ComponentFixture<SwitchPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
